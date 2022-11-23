var menu = document.getElementsByClassName("menu")[0];
var navbar_list = document.getElementsByClassName("navbar_list")[0]
var close_button = document.getElementsByClassName("close")[0];

menu.addEventListener("click"
    , function () {
        navbar_list.classList.toggle("visible");
        close_button.classList.toggle("visible");
        menu.classList.toggle("invisible");



    })


    close_button.addEventListener("click"
    , function () {
        navbar_list.classList.toggle("visible");
        close_button.classList.toggle("visible");
        menu.classList.toggle("invisible");



    })