(function() {
  // Check if we're already at the top of the page
  const isAtTop = window.scrollY <= 100;

  if (isAtTop) {
    // If at top, scroll to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    // Otherwise, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
})();
