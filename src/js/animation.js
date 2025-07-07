// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins here
gsap.registerPlugin(ScrollTrigger);

// On load animations
const navigation = document.getElementById('navigation');
const header = document.getElementsByTagName('header');

// Navigation
gsap.from(navigation, {
  opacity: 0,
  autoAlpha: 0,
  duration: 1,
  delay: 0.5,
  ease: 'ease.out'
});

// Header
gsap.from(header, {
  y: 24,
  opacity: 0,
  autoAlpha: 0,
  ease: 'ease.out',
  duration: 1,
  delay: 0.75
});

// Animate headings for each section WIP
const animateHeadings = document.querySelectorAll('.animate-heading');
animateHeadings.forEach((heading) => {
  const animateHeading = heading.querySelector('h2');
  const animateDesc = heading.querySelector('p');
  gsap.from(animateHeading, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24,
    opacity: 0,
    autoAlpha: 0,
    duration: 0.75,
    ease: 'ease.out'
  });
  gsap.from(animateDesc, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24,
    opacity: 0,
    autoAlpha: 0,
    duration: 0.75,
    ease: 'ease.out'
  });
});

// Animate each skill listed
const animateSkills = document.querySelectorAll('.animate-skill');
animateSkills.forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24,
    opacity: 0,
    autoAlpha: 0,
    duration: 1,
    delay: 0.5,
    ease: 'ease.out'
  });
});

// Projects Scroll Triggers
const projectContainer = document.getElementById('projects');
const projectCards = projectContainer.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card
    },
    y: 24,
    opacity: 0,
    autoAlpha: 0,
    duration: 1,
    delay: 0.25,
    ease: 'ease.out'
  });
});

// About section
const animateAbout = document.getElementById('about');

gsap.from(animateAbout, {
  scrollTrigger: {
    trigger: animateAbout
  },
  y: 24,
  opacity: 0,
  autoAlpha: 0,
  duration: 1,
  delay: 0.5,
  ease: 'ease.out'
});

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
