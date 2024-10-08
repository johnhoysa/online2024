// Get all anchor links
const links = document.querySelectorAll('nav div ul.anchor-list li a');
//get divs with IDs
const sections = document.querySelectorAll('div[id]');

// Scroll to anchor
links.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const scrollId = this.getAttribute('href').substring(1);
    const scrollElement = document.getElementById(scrollId);
    const headerOffset = 116;
    const scrollPosition = scrollElement.getBoundingClientRect().top;
    const offsetPosition = scrollPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Highlight active anchor link based on the section in view
// Extract the id values into an array this is used to observe the elements
const ids = Array.from(sections).map((section) => section.id);

// Callback function to handle intersection changes
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // remove class from all links
      links.forEach((link) => {
        link.classList.remove('border-b', 'pb-1');
      });
      // add class to the current link
      document
        .querySelector(`nav ul li a[href="#${entry.target.id}"]`)
        .classList.add('border-b', 'pb-1');
      // no need for an else statement as the class is removed from all links
    }
  });
};

// Create an Intersection Observer instance
// Can add additional options in the future
const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // 20% or more of element must be in view
});

// Loop through the sections and observe each one by it's Id
ids.forEach((id) => {
  const element = document.getElementById(id);
  if (element) {
    observer.observe(element);
  }
});
