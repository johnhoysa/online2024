// GSAP Imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
// Register plugins here
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// Elements to animate or tween
const navigation = document.getElementById('navigation');
const header = document.getElementsByTagName('header');
const animateHeadings = document.querySelectorAll('.animate-heading');
const animateSkills = document.querySelectorAll('.animate-skill');
const projectContainer = document.getElementById('projects');
let projectCards = [];

if (projectContainer) {
  projectCards = projectContainer.querySelectorAll('.project-card');
}
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
if (navigation) {
  gsap.from(navigation, {
    delay: 0.5
  });
}

// Header
if (header) {
  gsap.from(header, {
    y: 24,
    delay: 0.75
  });
}

// Animate headings
if (animateHeadings) {
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
}
if (animateSkills) {
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
}

// Projects Scroll Triggers
if (projectCards) {
  projectCards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card
      },
      y: 24,
      delay: 0.25
    });
  });
}

// About section
if (animateAbout) {
  gsap.from(animateAbout, {
    scrollTrigger: {
      trigger: animateAbout
    },
    y: 24
  });
}

// Footer, animate with about section
if (animateFooter) {
  gsap.from(animateFooter, {
    scrollTrigger: {
      trigger: animateAbout
    },
    y: 24
  });
}

//
// Hover animations for nav and social
// not all animations have a targetSelector, use null like I did for social icons
function setupHoverAnimation(selector, targetSelector, animationProps) {
  const items = document.querySelectorAll(selector);

  items.forEach((item) => {
    // target is the item that will be animated
    const target = targetSelector ? item.querySelector(targetSelector) : item;

    const tl = gsap.timeline({ paused: true });
    tl.to(target, animationProps);

    item.addEventListener('mouseenter', () => tl.play());
    item.addEventListener('mouseleave', () => tl.reverse());
    item.addEventListener('click', () => tl.play());
  });
}

//For nav items (underline divs)
setupHoverAnimation('#navItems li', 'div', {
  y: 12,
  opacity: 1,
  autoAlpha: 1,
  duration: 0.5,
  ease: 'ease.inOut'
});

// social icons header background color
setupHoverAnimation('#navSocial li', null, {
  backgroundColor: '#EE684A',
  duration: 0.5,
  ease: 'ease.inOut',
  opacity: 1,
  autoAlpha: 1
});
// social icons footer background color
setupHoverAnimation('#navSocialFooter li', null, {
  backgroundColor: '#EE684A',
  duration: 0.5,
  ease: 'ease.inOut',
  opacity: 1,
  autoAlpha: 1
});
