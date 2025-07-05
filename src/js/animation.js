// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Intialize plugins
gsap.registerPlugin(ScrollTrigger);

///

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('#navItems li');

  navItems.forEach((item) => {
    const underline = item.querySelector('div');

    // Create a timeline paused by default
    const tl = gsap.timeline({ paused: true });
    tl.to(underline, {
      y: 12,
      opacity: 1,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power2.out'
    });

    item.addEventListener('mouseenter', () => {
      tl.play();
    });

    item.addEventListener('mouseleave', () => {
      tl.reverse();
    });
    item.addEventListener('click', () => {
      tl.play();
    });
  });
});
