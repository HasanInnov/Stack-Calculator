
  const overlay = document.getElementById('overlay');
  const downloadButtons = document.querySelectorAll('.Download');

  downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.remove('hidden');   // make visible first
      // Trigger reflow to restart transition
      void overlay.offsetWidth; 
      overlay.classList.add('active');      // then fade in
    });
  });

  function hideOverlay() {
    overlay.classList.remove('active');     // fade out
    setTimeout(() => {
      overlay.classList.add('hidden');      // fully hide after fade
    }, 300); // match CSS transition time
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideOverlay();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideOverlay();
  });

  // ensure it's hidden initially
  overlay.classList.add('hidden');
