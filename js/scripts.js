
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



//-------------------------------------//
//-------------PORTAFOLIO-------------//
//------------------------------------//


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider__container');
    const prevButton = document.querySelector('.slider__button--prev');
    const nextButton = document.querySelector('.slider__button--next');
    const images = document.querySelectorAll('.slider__image');
    const imageCount = images.length;
    let currentIndex = 0;
    let interval;

    function moveToImage(index) {
        track.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function autoPlay() {
        currentIndex = (currentIndex + 1) % imageCount;
        moveToImage(currentIndex);
    }

    function startAutoPlay() {
        interval = setInterval(autoPlay, 3000);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    nextButton.addEventListener('click', function() {
        stopAutoPlay();
        currentIndex = (currentIndex + 1) % imageCount;
        moveToImage(currentIndex);
        startAutoPlay();
    });

    prevButton.addEventListener('click', function() {
        stopAutoPlay();
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        moveToImage(currentIndex);
        startAutoPlay();
    });

    window.addEventListener('resize', function() {
        moveToImage(currentIndex);
    });

    startAutoPlay();
});


//Proyectos//
// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    const projectsData = {
        "proyecto1": {
            title: "Título del Proyecto 1",
            subtitle: "Subtítulo del Proyecto 1",
            description: "Descripción detallada del Proyecto 1.",
            images: ["img1.jpg", "img2.jpg", "img3.jpg"],
            tools: ["icon1.png", "icon2.png", "icon3.png", "icon4.png", "icon5.png"]
        },
        "proyecto2": {
            title: "Título del Proyecto 2",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            images: ["img4.jpg", "img5.jpg", "img6.jpg"],
            tools: ["icon6.png", "icon7.png", "icon8.png", "icon9.png", "icon10.png"]
        }
        // Agrega más proyectos aquí
    };

    if (projectId) {
        const projectData = projectsData[projectId];
        
        if (projectData) {
            document.getElementById('project-title').textContent = projectData.title;
            document.getElementById('project-subtitle').textContent = projectData.subtitle;
            document.getElementById('project-description').textContent = projectData.description;

            const imagesContainer = document.getElementById('project-images');
            projectData.images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.classList.add('project__image');
                imagesContainer.appendChild(imgElement);
            });

            const toolsContainer = document.getElementById('project-tools');
            projectData.tools.forEach(tool => {
                const imgElement = document.createElement('img');
                imgElement.src = tool;
                imgElement.classList.add('project__tool');
                toolsContainer.appendChild(imgElement);
            });
        }
    }
});


//SOBRE MI

//seccion habilidades
//Se detecta el scrolling para aplicar la animacion de las habilidades

window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("skills__barra--html");
        document.getElementById("ai").classList.add("skills__barra--ai");
        document.getElementById("max").classList.add("skills__barra--max");
    }
}