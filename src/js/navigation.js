
window.addEventListener('scroll', () => {
    const element = document.querySelector('#hero');
    const rect = element.getBoundingClientRect();
    const navigation = document.getElementById('navigation');
    const socialIcons = document.getElementById('socialIcons');
    
    if (rect.top <= -108) {
        console.log('Element has scrolled 108 off the screen');
        navigation.classList.add('bg-dirt/75');
        if (window.innerWidth < 767) {
          socialIcons.classList.add('hidden') // only if on mobile though
        }
    }
});