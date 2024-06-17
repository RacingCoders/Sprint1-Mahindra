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
const searchBtn = document.querySelector('.conteudo nav form .form-input button');
const searchBtnIcon = document.querySelector('.conteudo nav form .form-input button .bx');
const searchForm = document.querySelector('.conteudo nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        Menu.classList.add('close');
    } else {
        Menu.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});
const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel > div');
const totalSlides = slides.length;

function showSlide(index) {
    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(${-index * 100}%)`;
}

// Inicializa a exibição do primeiro slide
showSlide(slideIndex);

function changeSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// Eventos dos botões de navegação
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
