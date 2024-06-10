document.addEventListener("DOMContentLoaded", () => {
  const lightbox = GLightbox({
    selector: ".gallery_item a",
    touchNavigation: true, // Enable touch navigation
    loop: true, // Loop through the images
  });
});
