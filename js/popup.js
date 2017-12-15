
var button = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-letter");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("Отправить форму");
  });

  
