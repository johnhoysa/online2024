// Select all elements with the class "box"
// Image fade-in part of lazy-load
const fadeInContent = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li');

// Create an IntersectionObserver
const startAnimations = new IntersectionObserver(
  (domElements) => {
    domElements.forEach((domElement) => {
      const element = domElement.target;
      if (domElement.isIntersecting) {
        // Element entered the viewport
        element.classList.add('animate-fade-in');
      }
    });
  }
);

// If paragraph is in viewport, add class fadeInContent
fadeInContent.forEach((element) => {
  startAnimations.observe(element);
});
