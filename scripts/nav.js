const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    menu.classList.add("open"); //se puede ver el <ul>
    open.classList.add("noVisible"); //no se puede ver el icono burger
    close.classList.remove("noVisible"); //quito la clase noVisible al icono X para que se vea
});

close.addEventListener("click", () => {
    menu.classList.remove("open");
    open.classList.remove("noVisible");
    close.classList.add("noVisible");
})