// GSAP Imports
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const headerOffset = 116;
const links = document.querySelectorAll('.anchor-list a.anchor');

// Reusable GSAP scroll function
function smoothScrollToHash(hash) {
  const scrollId = hash.replace('#', '');
  const scrollElement = document.getElementById(scrollId);
  if (!scrollElement) return;

  gsap.to(window, {
    duration: 0.5,
    scrollTo: {
      y: scrollElement,
      offsetY: headerOffset
    },
    ease: 'ease.out'
  });
}

// Handle link clicks
links.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const hash = this.getAttribute('href');
    history.pushState(null, null, hash); // Optional: update URL
    smoothScrollToHash(hash);
  });
});

// Handle hash on page load
if (window.location.hash) {
  smoothScrollToHash(window.location.hash);
}
