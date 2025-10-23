#!/bin/bash

# Script to generate PNG icons from SVG
# Requires imagemagick (install with: sudo apt install imagemagick)

if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Install it with: sudo apt install imagemagick"
    exit 1
fi

echo "Generating PNG icons from SVG..."

convert icons/icon.svg -resize 16x16 icons/icon16.png
convert icons/icon.svg -resize 32x32 icons/icon32.png
convert icons/icon.svg -resize 48x48 icons/icon48.png
convert icons/icon.svg -resize 128x128 icons/icon128.png

echo "Done! Icons generated successfully."
