// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Intialize plugins
gsap.registerPlugin(ScrollTrigger);

///
const navItems = document.querySelectorAll('ul#navigationItems li');

const navSpans = document.querySelectorAll('ul#navigationItems li span');

let clicked = false;

// Create GSAP tween targeting the CSS variable
const afterTween = gsap.to(btnSpan, {
  y: 8,
  duration: 1,
  ease: 'power2.out',
  opacity: 1,
  autoAlpha: 1,
  paused: true
});

btn.addEventListener('mouseenter', () => {
  if (!clicked) {
    afterTween.play();
  }
});

btn.addEventListener('mouseleave', () => {
  if (!clicked) {
    afterTween.reverse();
  }
});

btn.addEventListener('click', () => {
  clicked = true;
  afterTween.play(); // ensure it's fully shown
});

//
