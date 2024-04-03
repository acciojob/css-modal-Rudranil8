let modal = document.querySelector(".modal");
let openModalButton = document.getElementById("openModal");

openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});
let closeModalButton = document.querySelector(".close-modal");

closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});