#!/bin/bash
# Script to convert CDR logo to PNG
# Note: This requires uniconvertor or inkscape to be installed

cd /home/ubuntu/travels/static/images

# Try uniconvertor first
if command -v uniconvertor &> /dev/null; then
    echo "Converting logo using uniconvertor..."
    uniconvertor "logo t2j.cdr" "logo_t2j.png" 2>&1
    if [ -f "logo_t2j.png" ]; then
        echo "✓ Logo converted successfully to PNG"
        exit 0
    fi
fi

# Try inkscape
if command -v inkscape &> /dev/null; then
    echo "Converting logo using inkscape..."
    inkscape "logo t2j.cdr" --export-filename="logo_t2j.png" 2>&1
    if [ -f "logo_t2j.png" ]; then
        echo "✓ Logo converted successfully to PNG"
        exit 0
    fi
fi

echo "⚠ No conversion tool found. Please install uniconvertor or inkscape,"
echo "  or manually convert 'logo t2j.cdr' to PNG format and save as 'logo_t2j.png'"
exit 1

