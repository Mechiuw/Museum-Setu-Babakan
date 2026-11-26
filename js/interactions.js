/**
 * SUBTLE SCROLL REVEAL & PLACEHOLDER IMAGE HANDLER
 */
function initInteractions() {
  // IntersectionObserver untuk animasi masuk yang halus
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  attachPlaceholderFallbacks();
}

/**
 * Jika gambar placeholder belum diganti oleh file asli di folder assets,
 * sembunyikan broken icon browser dan tampilkan kotak rasio editorial yang rapi.
 */
function attachPlaceholderFallbacks() {
  document.querySelectorAll('.img-frame img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      this.parentElement.classList.add('is-placeholder');
    });
  });
}