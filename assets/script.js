const sideLinks = document.querySelectorAll('.menu .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
const menuBar = document.querySelector('.conteudo nav .bx.bx-menu');
const Menu = document.querySelector('.menu');

menuBar.addEventListener('click', () => {
    Menu.classList.toggle('close');
});
