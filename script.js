const imageModal = document.getElementById("imageModal");

imageModal.addEventListener("show.bs.modal", function (event) {
  const clickedImage = event.relatedTarget;
  const modalImage = document.getElementById("modalImage");

  modalImage.src = clickedImage.src;
});

imageModal.addEventListener("hidden.bs.modal", function () {
  document.getElementById("modalImage").src = "";
});
