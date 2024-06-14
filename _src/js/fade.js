// Function to check if an element is near the top of the viewport
function isNearTop(element, offset = 100) {
  var rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

// Function to handle the visibility of layout items
function handleLayoutItems() {
  var layoutItems = document.querySelectorAll('.section');
  layoutItems.forEach(function(el) {
    if (isNearTop(el, 100)) {
      el.classList.add('section--visible');
    }
  });
}

// Event listener for the scroll event
window.addEventListener("scroll", handleLayoutItems);
window.addEventListener("load", handleLayoutItems);

