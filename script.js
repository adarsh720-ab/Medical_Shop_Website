
document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .btn')
  .forEach(function(item) {
    item.addEventListener('click', function() {
      let navbarCollapse = document.querySelector('.navbar-collapse');
      let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });


const imageModal = document.getElementById("imageModal");

imageModal.addEventListener("show.bs.modal", function (event) {
  const clickedImage = event.relatedTarget;
  const modalImage = document.getElementById("modalImage");

  modalImage.src = clickedImage.src;
});

imageModal.addEventListener("hidden.bs.modal", function () {
  document.getElementById("modalImage").src = "";
});
