document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("i");
    let menu = document.querySelector("nav");
    let layer = document.querySelector(".fade-layer");
    let menu_button = document.querySelector(".menu_button");

    console.log("hej");
    button.addEventListener("click", show);
    layer.addEventListener("click", show);
    menu_button.addEventListener("click", show);


    function show() {
        console.log("funkar");
        menu.classList.toggle("show");
        layer.classList.toggle("visible");
    }
});
