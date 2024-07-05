window.addEventListener('scroll', () => {
    const scrollerBar__bar = document.getElementById('scrollerBar__bar');
    requestAnimationFrame(update);
});

function update() { //Cantidad dde píxeles scrolleados / (Alto total del body * Alto total de la ventana del buscador)
    scrollerBar__bar.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
}
