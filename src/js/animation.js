// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins here
gsap.registerPlugin(ScrollTrigger);

// Nav Items Hover
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
      ease: 'ease.inOut'
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

// Social Items Header Hover
document.addEventListener('DOMContentLoaded', () => {
  const navSocialItems = document.querySelectorAll('#navSocial li');

  navSocialItems.forEach((item) => {
    const circleBG = item;

    // Create a timeline paused by default
    const tl = gsap.timeline({ paused: true });
    tl.to(circleBG, {
      background: '#EE684A',
      duration: 0.5,
      ease: 'ease.inOut'
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

// Social Items Footer Hover
document.addEventListener('DOMContentLoaded', () => {
  const navSocialItems = document.querySelectorAll('#navSocialFooter li');

  navSocialItems.forEach((item) => {
    const circleBG = item;

    // Create a timeline paused by default
    const tl = gsap.timeline({ paused: true });
    tl.to(circleBG, {
      background: '#EE684A',
      duration: 0.5,
      ease: 'ease.inOut'
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
