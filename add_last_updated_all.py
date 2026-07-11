#!/usr/bin/env python3
"""Add lastUpdated field to all data files"""

import re
import os

files_to_update = [
    '/workspace/newskingdom/app/data/financeData.ts',
    '/workspace/newskingdom/app/data/healthData.ts',
    '/workspace/newskingdom/app/data/foodData.ts',
]

for file_path in files_to_update:
    print(f"Processing {file_path}...")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add lastUpdated to the interface
    if 'date: string;' in content and 'lastUpdated: string;' not in content:
        content = content.replace(
            '  date: string;\n  tags: string[];',
            '  date: string;\n  lastUpdated: string;\n  tags: string[];'
        )

    # Add lastUpdated field after each date field in posts
    pattern = r'(date: "([^"]+)",)\n    tags:'
    replacement = r'\1\n    lastUpdated: "2026-07-11",\n    tags:'

    content = re.sub(pattern, replacement, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Updated {file_path}")

print("\nAll data files updated successfully!")
