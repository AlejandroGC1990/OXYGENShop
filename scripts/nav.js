const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    menu.classList.add("open");
    open.classList.add("noVisible");
    close.classList.remove("noVisible");
});

close.addEventListener("click", () => {
    menu.classList.remove("open");
    open.classList.remove("noVisible");
    close.classList.add("noVisible");
})