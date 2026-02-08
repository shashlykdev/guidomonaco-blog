#!/bin/bash
# Add logo to all page headers

for file in app/page.tsx app/property/page.tsx app/attractions/page.tsx app/events/page.tsx app/best-time/page.tsx; do
  # Check if Image import already exists
  if ! grep -q "import Image from 'next/image'" "$file"; then
    # Add Image import after Link import
    sed -i '' "/import Link from 'next\/link'/a\\
import Image from 'next/image'
" "$file"
  fi
done

echo "Logo import added to all pages"
