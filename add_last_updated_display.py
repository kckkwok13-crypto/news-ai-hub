#!/usr/bin/env python3
"""Add lastUpdated display to ClientWrapper files"""

import os
import re

# Find all ClientWrapper.tsx files
client_wrapper_files = []
for root, dirs, files in os.walk('/workspace/newskingdom/app'):
    for file in files:
        if file == 'ClientWrapper.tsx':
            client_wrapper_files.append(os.path.join(root, file))

print(f"Found {len(client_wrapper_files)} ClientWrapper files")

for file_path in client_wrapper_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if lastUpdated already exists
    if 'lastUpdated' in content:
        print(f"  ✓ Already has lastUpdated: {file_path}")
        continue

    # Add lastUpdated constant after the content definition
    # Look for pattern like: export default function XxxPage() {
    # and add lastUpdated constant before it

    # Add lastUpdated constant before export default function
    if 'export default function' in content and 'lastUpdated' not in content:
        # Find a good place to add the constant - after the main content object definition
        # Look for pattern: content = xxxContent[currentLang]
        content = re.sub(
            r'(const content = \w+Content\[currentLang\];)',
            r'\1\n  const lastUpdated = "2026-07-11";',
            content
        )

        # Update the date display in the header
        # Pattern: May 2026 · Author: ...
        # Change to: May 2026 · Last Updated: 2026-07-11 · Author: ...
        content = re.sub(
            r'(<p className="text-\[#94a3b8\]">)([^<]+)( · )',
            r'\1\2 · Last Updated: 2026-07-11 · ',
            content
        )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Updated: {file_path}")

print("\nAll ClientWrapper files updated!")
