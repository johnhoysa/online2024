// Select all elements with the class "box"
// Image fade-in part of lazy-load
const fadeInContent = document.querySelectorAll('h1,header h2');

// Create an IntersectionObserver
const startAnimations = new IntersectionObserver((domElements) => {
  domElements.forEach((domElement) => {
    const element = domElement.target;
    if (domElement.isIntersecting) {
      // Element entered the viewport
      element.classList.add('animate-fade-in');
    }
  });
});

// If paragraph is in viewport, add class fadeInContent
fadeInContent.forEach((element) => {
  startAnimations.observe(element);
});
