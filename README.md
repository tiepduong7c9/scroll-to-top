# Scroll to Top/Bottom Chrome Extension

A simple Chrome extension that allows you to quickly scroll to the top or bottom of any webpage with a single click.

## Features

- **Toggle scrolling**: Click once to scroll to top, click again to scroll to bottom
- **Smooth scrolling**: Uses smooth scroll animation for better user experience
- **Lightweight**: Minimal code with no dependencies
- **Works on all websites**: Uses Chrome's activeTab permission

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the `scroll-to-top` folder
6. The extension should now appear in your toolbar

All icons are already included in the `icons/` folder, so no additional setup is needed.

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
├── icons/
│   ├── icon.svg          # Source SVG icon
│   ├── icon16.png        # 16x16 icon
│   ├── icon32.png        # 32x32 icon
│   ├── icon48.png        # 48x48 icon
│   └── icon128.png       # 128x128 icon
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
