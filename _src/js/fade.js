// Function to check if an element is near the top of the viewport
function isNearTop(element, offset = 100) {
  var rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

// Function to handle the visibility of layout items
function handleLayoutItems() {
  var layoutItems = document.querySelectorAll('.card');
  layoutItems.forEach(function(el) {
    if (isNearTop(el, 100)) {
      el.classList.remove('opacity-0', 'translate-y-8');
    }
  });
}

// Event listener for the scroll event
galleryPanel.addEventListener("scroll", handleLayoutItems);
window.addEventListener("load", handleLayoutItems);
