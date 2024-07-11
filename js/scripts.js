
    //Menu desplegable mobile
    const nav= document.querySelector(".navbar__menu");
    const abrir= document.querySelector("#abrir");
    const cerrar= document.querySelector("#cerrar");

    abrir.addEventListener("click", () =>{
        nav.classList.add("visible");
    })

    cerrar.addEventListener("click", () =>{
        nav.classList.remove("visible");
    })

    // carrusel de habilidades
    document.addEventListener('DOMContentLoaded', function() {
        const track = document.querySelector('.carousel__track');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const cards = document.querySelectorAll('.carousel__card');
        const cardWidth = cards[0].offsetWidth;
        let currentIndex = 0;

        function moveToCard(index) {
            track.style.transform = 'translateX(' + (-index * cardWidth) + 'px)';
        }

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % cards.length;
            moveToCard(currentIndex);
        });

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            moveToCard(currentIndex);
        });

        window.addEventListener('resize', function() {
            moveToCard(currentIndex);
        });
    });

    // Navegación suave al hacer clic en los enlaces del menú
    const navbarLinks = document.querySelectorAll('.header__menu-item a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


// Acordeon de servicios
//
document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion__header');
    var contents = document.querySelectorAll('.accordion__content');
    
    headers.forEach(function(header, index) {
        header.addEventListener('click', function() {
            // Primero, cerrar todos los contenidos
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Luego, abrir el contenido correspondiente al índice clicado
            var content = header.nextElementSibling;
            content.style.display = 'block';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.tab-content');

    function activateTab(tab) {
        // Quitar la clase active de todas las pestañas y contenidos
        document.querySelector('.tab.active')?.classList.remove('active');
        document.querySelector('.tab-content.active')?.classList.remove('active');

        // Añadir la clase active a la pestaña y contenido seleccionados
        tab.classList.add('active');
        var tabId = tab.getAttribute('data-tab');
        document.getElementById('tab-content-' + tabId).classList.add('active');
    }

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            activateTab(tab);
        });
    });
});