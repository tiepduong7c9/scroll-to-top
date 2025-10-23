# Scroll to Top/Bottom Chrome Extension

A simple Chrome extension that allows you to quickly scroll to the top or bottom of any webpage with a single click.

## Features

- **Toggle scrolling**: Click once to scroll to top, click again to scroll to bottom
- **Smooth scrolling**: Uses smooth scroll animation for better user experience
- **Lightweight**: Minimal code with no dependencies
- **Works on all websites**: Uses Chrome's activeTab permission

## Installation

### Step 1: Generate Icons

First, you need to generate the PNG icons from the SVG file:

**Option A: Using ImageMagick (Recommended)**

```bash
# Install ImageMagick if you don't have it
sudo apt install imagemagick

# Run the icon generation script
./generate-icons.sh
```

**Option B: Manual Generation**

If you prefer, you can use any online SVG to PNG converter:

1. Open `icons/icon.svg` in a browser or image editor
2. Export it as PNG at these sizes: 16x16, 32x32, 48x48, and 128x128
3. Save them as `icon16.png`, `icon32.png`, `icon48.png`, and `icon128.png` in the `icons` folder

**Option C: Use Placeholder Icons**

You can temporarily use any PNG images (rename them to match the required names) until you generate proper icons.

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select this folder (`scroll-to-top`)
5. The extension should now appear in your toolbar

## Usage

1. Navigate to any webpage
2. Click the extension icon in your Chrome toolbar
3. The page will scroll to the top (if you're not already at the top) or to the bottom (if you're at the top)

## How It Works

- **manifest.json**: Defines the extension configuration and permissions
- **background.js**: Listens for clicks on the extension icon
- **content.js**: Executes the scroll logic on the active tab

## Files Structure

```
scroll-to-top/
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── content.js             # Content script for scrolling
├── generate-icons.sh      # Script to generate PNG icons
├── icons/
│   ├── icon.svg          # Source SVG icon
│   ├── icon16.png        # 16x16 icon (generated)
│   ├── icon32.png        # 32x32 icon (generated)
│   ├── icon48.png        # 48x48 icon (generated)
│   └── icon128.png       # 128x128 icon (generated)
└── README.md             # This file
```

## Customization

You can customize the scroll behavior by editing `content.js`:

- **Threshold**: Change the `100` value in `window.scrollY <= 100` to adjust when it considers you "at the top"
- **Scroll behavior**: Change `behavior: 'smooth'` to `behavior: 'auto'` for instant scrolling

## Permissions

This extension requires:
- `activeTab`: To access the current tab and execute the scroll script
- `scripting`: To inject the content script into the active tab

## License

Free to use and modify.
