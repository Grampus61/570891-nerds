
var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-letter");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var post = popup.querySelector("[name=post]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
  });
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!name.value || !post.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и e-mail");
    } else {
    localStorage.setItem("name", name.value);
  }
    }
  });
  
