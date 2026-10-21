/* ==========================================================
   gallery.js  -  opens a photo larger when it is clicked.
   Works with the photos listed in gallery.html.
   Press Esc, click Close, or click outside the photo to close.
   ========================================================== */

(function () {
  var dialog = document.getElementById("lightbox");
  if (!dialog || typeof dialog.showModal !== "function") { return; }

  var big = document.getElementById("lightbox-img");
  var caption = document.getElementById("lightbox-caption");
  var closeButton = dialog.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach(function (button) {
    button.addEventListener("click", function () {
      var thumb = button.querySelector("img");
      big.src = thumb.getAttribute("src");
      big.alt = thumb.alt;
      caption.textContent = thumb.alt;
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", function () { dialog.close(); });

  // Clicking the dark area around the photo also closes it
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) { dialog.close(); }
  });
})();
