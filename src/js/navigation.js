function toggleHeaderClass() {
  const nav = document.querySelector('nav');
  const scrollPosition = window.scrollY;
  let scrolledPosition = 108;
  if (window.innerWidth < 767) {
    scrolledPosition = 64;
  }

  if (scrollPosition > scrolledPosition) {
     nav.classList.add('backdrop-blur-xs', 'shadow-lg','bg-dirt/90');
  } else {
     nav.classList.remove('backdrop-blur-xs', 'shadow-lg','bg-dirt/90');
  }
}
// Listen for scroll events
window.addEventListener('scroll', toggleHeaderClass);
