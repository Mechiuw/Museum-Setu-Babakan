/**
 * RENDERER KOLEKSI, GALERI, FILTER KATEGORI & LIGHTBOX
 */
function initCollectionsAndGallery() {
  const isSubPage = window.location.pathname.includes('/pages/');
  const basePath = isSubPage ? '../' : '';

  // 1. Render Featured Collection di Homepage (4 item pertama)
  const homeCollectionGrid = document.getElementById('home-collection-grid');
  if (homeCollectionGrid && typeof MUSEUM_DATA !== 'undefined') {
    const featured = MUSEUM_DATA.collections.slice(0, 4);
    homeCollectionGrid.innerHTML = featured.map(item => createCollectionCard(item, basePath)).join('');
  }

  // 2. Render Full Collection di pages/collection.html
  const fullCollectionGrid = document.getElementById('full-collection-grid');
  if (fullCollectionGrid && typeof MUSEUM_DATA !== 'undefined') {
    renderCollectionList('all');

    document.querySelectorAll('[data-collection-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-collection-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCollectionList(btn.dataset.collectionFilter);
      });
    });
  }

  function renderCollectionList(filter) {
    const items = filter === 'all'
      ? MUSEUM_DATA.collections
      : MUSEUM_DATA.collections.filter(c => c.category === filter);

    fullCollectionGrid.innerHTML = items.map(item => createCollectionCard(item, basePath)).join('');
    attachPlaceholderFallbacks();
  }

  // 3. Render Gallery Preview di Homepage (3 item)
  const homeGalleryGrid = document.getElementById('home-gallery-grid');
  if (homeGalleryGrid && typeof MUSEUM_DATA !== 'undefined') {
    const preview = MUSEUM_DATA.gallery.slice(0, 3);
    homeGalleryGrid.innerHTML = preview.map((item, idx) => createGalleryCard(item, idx, basePath)).join('');
  }

  // 4. Render Full Gallery di pages/gallery.html + Lightbox
  const fullGalleryGrid = document.getElementById('full-gallery-grid');
  let activeGalleryItems = typeof MUSEUM_DATA !== 'undefined' ? [...MUSEUM_DATA.gallery] : [];

  if (fullGalleryGrid && typeof MUSEUM_DATA !== 'undefined') {
    renderGalleryList('all');

    document.querySelectorAll('[data-gallery-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-gallery-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGalleryList(btn.dataset.galleryFilter);
      });
    });
  }

  function renderGalleryList(filter) {
    activeGalleryItems = filter === 'all'
      ? [...MUSEUM_DATA.gallery]
      : MUSEUM_DATA.gallery.filter(g => g.category === filter);

    fullGalleryGrid.innerHTML = activeGalleryItems.map((item, idx) => createGalleryCard(item, idx, basePath)).join('');
    attachPlaceholderFallbacks();
    bindLightboxEvents(activeGalleryItems, basePath);
  }

  // Bind lightbox untuk preview homepage juga jika ada
  if (homeGalleryGrid && typeof MUSEUM_DATA !== 'undefined') {
    bindLightboxEvents(MUSEUM_DATA.gallery.slice(0, 3), basePath);
  }
}

function createCollectionCard(item, basePath) {
  return `
    <article class="collection-card">
      <div class="img-frame ratio-portrait" data-placeholder-label="${item.placeholderLabel}">
        <img src="${basePath}${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="collection-meta">
        <span>${item.categoryLabel} — ${item.period}</span>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function createGalleryCard(item, index, basePath) {
  return `
    <figure class="gallery-item" data-lightbox-index="${index}">
      <div class="img-frame ratio-landscape" data-placeholder-label="${item.placeholderLabel}">
        <img src="${basePath}${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <figcaption class="gallery-caption">
        <h4>${item.title}</h4>
        <span>${item.categoryLabel}</span>
      </figcaption>
    </figure>
  `;
}

function bindLightboxEvents(items, basePath) {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lbImg = document.getElementById('lightbox-img');
  const lbTitle = document.getElementById('lightbox-title');
  const lbCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item = items[currentIndex];
    if (!item) return;

    lbImg.src = `${basePath}${item.image}`;
    lbImg.alt = item.title;
    lbTitle.textContent = item.title;
    lbCaption.textContent = item.caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-lightbox-index]').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(parseInt(el.dataset.lightboxIndex, 10));
    });
  });

  if (closeBtn) closeBtn.onclick = closeLightbox;
  if (prevBtn) {
    prevBtn.onclick = () => openLightbox((currentIndex - 1 + items.length) % items.length);
  }
  if (nextBtn) {
    nextBtn.onclick = () => openLightbox((currentIndex + 1) % items.length);
  }

  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn?.click();
    if (e.key === 'ArrowRight') nextBtn?.click();
  });
}