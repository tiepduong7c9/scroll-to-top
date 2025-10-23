// Listen for clicks on the extension icon
chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Execute the scroll script in the active tab
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch (error) {
    console.error('Failed to execute script:', error);
  }
});
