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
        element.classList.add('animate-fade-in');
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
