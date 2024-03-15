function smoothScroll(target) {
    const element = document.querySelector(target);
    const topPos = element.offsetTop;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }

  // Обработчики событий для всех ссылок в навигации
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });

  