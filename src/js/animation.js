// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins here
gsap.registerPlugin(ScrollTrigger);

// Elements to animate or tween
const navigation = document.getElementById('navigation');
const header = document.getElementsByTagName('header');
const animateHeadings = document.querySelectorAll('.animate-heading');
const animateSkills = document.querySelectorAll('.animate-skill');
const projectContainer = document.getElementById('projects');
const projectCards = projectContainer.querySelectorAll('.project-card');
const animateAbout = document.getElementById('about');
const animateFooter = document.querySelector('footer');

// set defaults for tweens below
gsap.defaults({
  ease: 'ease.out',
  duration: 1,
  opacity: 0,
  autoAlpha: 0
});

// Navigation
gsap.from(navigation, {
  delay: 0.5
});

// Header
gsap.from(header, {
  y: 24,
  delay: 0.75
});

// Animate headings
animateHeadings.forEach((heading) => {
  const animateHeading = heading.querySelector('h2');
  const animateDesc = heading.querySelector('p');
  //
  gsap.from(animateHeading, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24
  });
  //
  gsap.from(animateDesc, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24
  });
});

// Animate each skill listed
animateSkills.forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading
    },
    y: 24,
    delay: 0.5
  });
});

// Projects Scroll Triggers
projectCards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card
    },
    y: 24,
    delay: 0.25
  });
});

// About section
gsap.from(animateAbout, {
  scrollTrigger: {
    trigger: animateAbout
  },
  y: 24
});

// Footer, animate with about section
gsap.from(animateFooter, {
  scrollTrigger: {
    trigger: animateAbout
  },
  y: 24
});

//
//
//
document.addEventListener('DOMContentLoaded', () => {
  // Reusable animation function
  function setupHoverAnimation(selector, targetSelector, animationProps) {
    const items = document.querySelectorAll(selector);

    items.forEach((item) => {
      const target = targetSelector ? item.querySelector(targetSelector) : item;

      const tl = gsap.timeline({ paused: true });
      tl.to(target, animationProps);

      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
      item.addEventListener('click', () => tl.play());
    });
  }

  // For nav items (underline divs)
  setupHoverAnimation('#navItems li', 'div', {
    y: 12,
    opacity: 1,
    autoAlpha: 1,
    duration: 0.5,
    ease: 'ease.inOut'
  });

  // For social items (background color change on <li>)
  setupHoverAnimation(
    '#navSocial li',
    null, // the <li> itself
    {
      backgroundColor: '#EE684A',
      duration: 0.5,
      ease: 'ease.inOut',
      opacity: 1,
      autoAlpha: 1
    }
  );
  setupHoverAnimation(
    '#navSocialFooter li',
    null, // the <li> itself
    {
      backgroundColor: '#EE684A',
      duration: 0.5,
      ease: 'ease.inOut',
      opacity: 1,
      autoAlpha: 1
    }
  );
});
