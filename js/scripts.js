document.addEventListener('DOMContentLoaded', () => {
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

    // Datos de los proyectos
    const projects = [
        { title: 'Proyecto 1', image: 'https://via.placeholder.com/300', link: 'project1.html' },
        { title: 'Proyecto 2', image: 'https://via.placeholder.com/300', link: 'project2.html' },
        // Añadir más proyectos según sea necesario
    ];

    
    const slider = document.querySelector('.portfolio__slider');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('portfolio__project');

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;
        projectImage.addEventListener('click', () => {
            window.location.href = project.link;
        });

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('portfolio__project-title');
        projectTitle.textContent = project.title;

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
        slider.appendChild(projectDiv);
    });
});

// Creación del slider de proyectos

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider__image-container');
    const images = document.querySelectorAll('.slider__image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlide = document.getElementById('currentSlide');
    const totalSlides = document.getElementById('totalSlides');
    let currentIndex = 0;

    totalSlides.textContent = images.length;

    function actualizarSlider() {
        const width = images[0].clientWidth; // Obtener el ancho de la primera imagen
        sliderContainer.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    function actualizarContador() {
        currentSlide.textContent = currentIndex + 1;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        actualizarSlider();
        actualizarContador();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        actualizarSlider();
        actualizarContador();
    });

    window.addEventListener('resize', actualizarSlider);
    actualizarSlider();
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