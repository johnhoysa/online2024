document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollId = this.getAttribute('href').substring(1);
      const scrollElement = document.getElementById(scrollId);
      const headerOffset = 108;
      const scrollPosition = scrollElement.getBoundingClientRect().top;
      const offsetPosition = scrollPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});