(() => {
  const dialog = document.querySelector('.game-lightbox');
  const enlargedImage = dialog.querySelector('.lightbox-image');
  const enlargedCaption = dialog.querySelector('#lightbox-caption');

  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const image = gallery.querySelector('.game-image');
    const imageLink = gallery.querySelector('.game-image-link');
    const caption = gallery.querySelector('.game-caption');
    const projectName = gallery.closest('article').querySelector('h2').textContent;

    gallery.querySelectorAll('.game-view').forEach(view => {
      view.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        image.src = view.href;
        image.alt = view.dataset.alt;
        image.width = Number(view.dataset.width);
        image.height = Number(view.dataset.height);
        imageLink.href = view.href;
        imageLink.setAttribute('aria-label', `Enlarge ${projectName}: ${view.dataset.caption}`);
        caption.textContent = view.dataset.caption;
        gallery.querySelectorAll('.game-view').forEach(item => item.removeAttribute('aria-current'));
        view.setAttribute('aria-current', 'true');
      });
    });

    imageLink.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      enlargedCaption.textContent = `${projectName} · ${caption.textContent}`;
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
})();
