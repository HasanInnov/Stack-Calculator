const overlay = document.getElementById('overlay');
const downloadButtons = document.querySelectorAll('.Download');

downloadButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('hidden');
    void overlay.offsetWidth;
    overlay.classList.add('active');
    document.body.classList.add('blurred'); // blur background
  });
});

function hideOverlay() {
  overlay.classList.remove('active');
  document.body.classList.remove('blurred'); // remove blur
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300);
}

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) hideOverlay();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideOverlay();
});

overlay.classList.add('hidden');
