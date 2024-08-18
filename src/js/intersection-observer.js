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
fadeInPara.forEach((element) => {
  startAnimations.observe(element);
});
fadeInHeading.forEach((element) => {
  startAnimations.observe(element);
});
//

// Lazy load images
const lazyImages = document.querySelectorAll('.lazy-load');
// Create an IntersectionObserver
const lazyLoadImage = new IntersectionObserver(
  (Images) => {
    Images.forEach((image) => {
      const element = image.target;
      const imagePath = element.getAttribute('data-image');
      // check if image is in viewport and if it has already been loaded
      if (image.isIntersecting && element.classList.contains('lazy-load')) {
        // Element entered the viewport
        element.classList.add('lazy-loaded');
        element.classList.add('fade-in');
        element.classList.remove('lazy-load');
        // load image
        element.src = imagePath;
      } else {
        // do nothing since image is loaded now
      }
    });
  },
  { threshold: 0 }
);

// Observe each box p element
lazyImages.forEach((element) => {
  lazyLoadImage.observe(element);
});
