console.log('my intersection observer file was imported');

// Select all elements with the class "box"
const fadeInPara = document.querySelectorAll('p');
const fadeInHeading = document.querySelectorAll('h1');
// Create an IntersectionObserver
const startAnimations = new IntersectionObserver(
  (domElements) => {
    domElements.forEach((domElement) => {
      const element = domElement.target;
      if (domElement.isIntersecting) {
        // Element entered the viewport
        element.classList.add('fade-in');
      } else {
        // Element entered the viewport
        element.classList.remove('fade-in');
      }
    });
  },
  { threshold: 0 }
);

// If paragraph is in viewport, add class fade-in
// fadeInPara.forEach((element) => {
//   startAnimations.observe(element);
// });
// fadeInHeading.forEach((element) => {
//   startAnimations.observe(element);
// });
