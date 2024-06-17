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

function autoSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

setInterval(autoSlide, 3000); 
//Quiz - script
document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        "Quem foi o primeiro piloto da Mahindra Racing a vencer uma corrida na Fórmula E?",
        "Em que temporada a Mahindra Racing estreou na Fórmula E?",
        "Qual piloto da Mahindra Racing conquistou a primeira pole position da equipe na Fórmula E?",
        "Quantas vitórias a Mahindra Racing conquistou na Fórmula E até agora?",
        "Em que temporada a Mahindra Racing alcançou seu melhor resultado no campeonato de equipes da Fórmula E?",
        "Qual piloto conquistou mais pódios para a Mahindra Racing na Fórmula E?",
        "Qual foi a primeira corrida da Fórmula E em que a Mahindra Racing competiu?",
        "Qual é o nome do patrocinador principal da Mahindra Racing na Fórmula E?",
        "Qual foi a posição final de Pascal Wehrlein no campeonato de pilotos da Fórmula E na temporada 2018-2019?",
        "Em que cidade a Mahindra Racing conquistou sua primeira vitória na Fórmula E?"
    ];

    const answers = [
        ["Nick Heidfeld", "Felix Rosenqvist", "Jérôme d'Ambrosio", "Pascal Wehrlein"],
        ["Temporada 1 (2014-2015)", "Temporada 2 (2015-2016)", "Temporada 3 (2016-2017)", "Temporada 4 (2017-2018)"],
        ["Nick Heidfeld", "Felix Rosenqvist", "Jérôme d'Ambrosio", "Pascal Wehrlein"],
        ["3", "4", "5", "6"],
        ["Temporada 3 (2016-2017)", "Temporada 4 (2017-2018)", "Temporada 5 (2018-2019)", "Temporada 6 (2019-2020)"],
        ["Nick Heidfeld", "Felix Rosenqvist", "Jérôme d'Ambrosio", "Pascal Wehrlein"],
        ["Beijing ePrix", "Buenos Aires ePrix", "Miami ePrix", "London ePrix"],
        ["ABB", "Qualcomm", "Enel", "Julius Baer"],
        ["2ª posição", "3ª posição", "4ª posição", "5ª posição"],
        ["Berlim", "Paris", "Marrakesh", "Hong Kong"]
    ];

    const correctAnswers = [1, 0, 2, 2, 2, 1, 0, 0, 0, 2];

    let currentQuestion = 0;
    let correct = 0;
    let incorrect = 0;

    const questionElement = document.getElementById('question');
    const numeroElement = document.getElementById('numero');
    const optionButtons = [
        document.getElementById('0'),
        document.getElementById('1'),
        document.getElementById('2'),
        document.getElementById('3')
    ];

    function displayQuestion() {
        questionElement.textContent = questions[currentQuestion];
        numeroElement.textContent = `#${currentQuestion + 1}`; // Atualiza a numeração da pergunta
        optionButtons.forEach((button, index) => {
            button.textContent = answers[currentQuestion][index];
        });
    }
});

const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Acertos', 'Erros', 'Progresso'],
        datasets: [{
            label: 'Seu progresso!',
            data: [0, 0, 0],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: questions.length
            }
        }
    }
});

function updateChart() {
    progressChart.data.datasets[0].data[0] = correct;
    progressChart.data.datasets[0].data[1] = incorrect;
    progressChart.data.datasets[0].data[2] = currentQuestion;
    progressChart.update();
}
optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === correctAnswers[currentQuestion]) {
            correct++;
        } else {
            incorrect++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert(`Quiz concluído! Acertos: ${correct}, Erros: ${incorrect}`);
        }

        updateChart();
    });
});

displayQuestion();
updateChart();

// Pilotos modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}