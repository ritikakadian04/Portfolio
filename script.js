// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll-to-Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.textContent = "↑";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.display = "none";
  document.body.appendChild(scrollToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  