
window.addEventListener('scroll', () => {
    const element = document.querySelector('#hero');
    const rect = element.getBoundingClientRect();
    const navigation = document.getElementById('navigation');
    const socialIcons = document.getElementById('socialIcons');
    
    if (rect.top <= -108) {
        navigation.classList.add('backdrop-blur-xs');
        navigation.classList.add('bg-dirt/90');
        if (window.innerWidth < 767) {
          socialIcons.classList.add('hidden') // only if on mobile though
        }
    }
});