const link = document.querySelector(".politic-trigger");
const popup = document.querySelector(".popup__politics");
const close = popup.querySelector(".popup__politics-close");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup__politics--show");

});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup__politics--show");
});


window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup__politics--show")) {
            popup.classList.remove("popup__politics--show");
        }
    }
});
