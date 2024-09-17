// Select all elements with the class "box"
const fadeInText = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,ul');

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
  },
  { threshold: 0 }
);

// If paragraph is in viewport, add class fadeInText
fadeInText.forEach((element) => {
  startAnimations.observe(element);
});
