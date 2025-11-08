// Wait until everything (CSS, fonts, images) is fully loaded
window.addEventListener("load", () => {
  const skeleton = document.getElementById("skeleton-loader");
  if (skeleton) {
    skeleton.classList.add("hidden");
    // Remove after fade animation
    setTimeout(() => skeleton.remove(), 800);
  }
});
