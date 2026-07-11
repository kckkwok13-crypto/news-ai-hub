#!/usr/bin/env python3
"""Add lastUpdated field to blogData.ts"""

import re

# Read the file
with open('/workspace/newskingdom/app/data/blogData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add lastUpdated to the interface
content = content.replace(
    '  date: string;\n  image: string;',
    '  date: string;\n  lastUpdated: string;\n  image: string;'
)

# Add lastUpdated field after each date field in blog posts
# Pattern: date: "Month Year",\n    image:
pattern = r'(date: "([^"]+)",)\n    image:'
replacement = r'\1\n    lastUpdated: "2026-07-11",\n    image:'

content = re.sub(pattern, replacement, content)

# Write the file back
with open('/workspace/newskingdom/app/data/blogData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully added lastUpdated field to all blog posts!")
