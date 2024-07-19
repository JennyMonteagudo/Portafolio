//MENU DESPLEGABLE MOBILE

// Selecciona el menú de navegación y los botones de abrir y cerrar
const nav = document.querySelector(".navbar__menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// Comprueba si el botón de abrir existe antes de agregarle el event listener
if (abrir) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });
} else {
    console.error('El elemento "abrir" no se encuentra en el DOM');
}

// Comprueba si el botón de cerrar existe antes de agregarle el event listener
if (cerrar) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
} else {
    console.error('El elemento "cerrar" no se encuentra en el DOM');
}


//TRANSICIÓN SUAVE a servicios

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces que apuntan a una sección específica de la página.
    const links = document.querySelectorAll('a[href^="index.html#"]');

    // Añade un evento 'click' a cada uno de los enlaces.
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previene el comportamiento por defecto del enlace.
            event.preventDefault();

            // Obtiene el ID de la sección destino desde el atributo 'href' del enlace.
            const targetId = link.getAttribute('href').split('#')[1];

            // Selecciona la sección destino usando el ID obtenido.
            const targetSection = document.getElementById(targetId);

            // Desplaza suavemente la página hasta la sección destino.
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

//ACORDEON DE SERVICIOS//

document.addEventListener('DOMContentLoaded', function () {
    // selecciona los headers y los contenidos del acordeon
    var headers = document.querySelectorAll('.accordion__header');
    var contents = document.querySelectorAll('.accordion__content');

    //pasa por cada header y aplica la función al hacer click.
    headers.forEach(function (header, index) {
        header.addEventListener('click', function () {
            // Primero, cerramos todos los contenidos con un display none.
            contents.forEach(function (content) {
                content.style.display = 'none';
            });

            // Luego, abrimos el contenido correspondiente al índice al que se le hizo click.
            var content = header.nextElementSibling;
            content.style.display = 'block';
        });
    });
});


//PORTAFOLIO  ¡SLIDER!//

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el contenedor del slider, los botones de anterior y siguiente y todas lasimagenes, .
    const track = document.querySelector('.slider__container');
    const prevButton = document.querySelector('.slider__button--prev');
    const nextButton = document.querySelector('.slider__button--next');
    const images = document.querySelectorAll('.slider__image');
    // Dice cuantas imagenes tiene
    const imageCount = images.length;
    // Inicia en el índice de la imagen actual.
    let currentIndex = 0;
    // Declaro una variable para la reproducción automática.
    let interval;

    // Creo una función para mover el slider a la imagen especificada por el índice y transformo el contenedor para desplazarlo horizontalmente.
    function moveToImage(index) {
        track.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    // Se crea una función para la reproducción automática.
    function autoPlay() {
        // Incrementa el índice actual y no se pasa del indice de la cantidad de imagenes
        currentIndex = (currentIndex + 1) % imageCount;
        // Mueve el slider a la imagen correspondiente al índice actual.
        moveToImage(currentIndex);
    }

    // Configura un intervalo que llama a la función autoPlay cada 3 segundos
    function startAutoPlay() {
        interval = setInterval(autoPlay, 3000);
    }

    // se vacía el intervalo para detener el autoplay
    function stopAutoPlay() {
        clearInterval(interval);
    }

    // Al hacer click en siguiente detiene la reproducción automática y mueve el slider a la siguiente imagen. al final vuelve a empezar a reroducirse
    nextButton.addEventListener('click', function() {
        stopAutoPlay();
        currentIndex = (currentIndex + 1) % imageCount;
        moveToImage(currentIndex);
        startAutoPlay();
    });

    // Hace los mismo que el evento de siguiente pero con el botón de anterior
    prevButton.addEventListener('click', function() {
        stopAutoPlay();
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        moveToImage(currentIndex);
        startAutoPlay();
    });

    // Añade un evento 'resize' a la ventana del navegador y ajusta la posición del slider por si camnia el tamaño de la ventana.
    window.addEventListener('resize', function() {
        moveToImage(currentIndex);
    });

    // Inicia la reproducción automática del slider.
    startAutoPlay();
});



//SOBRE MI//

//SECCION HABILIDADES ¡PARALLAX!

//Se detecta el scroll de la ventana para aplicar la animación de la barra de las habilidades.
window.onscroll = function () {
    efectoHabilidades()
};

//esta funciónn aplica la animación de la barra de habilidades.
function efectoHabilidades() {
    //se crean las variables a partir de tomar su id.
    var skills = document.getElementById("skills");
    //esta variable relaciona la altura de la pantalla y el la altura del div de las habilidades.
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    //cuendo la distancia entre la parte superior de la pantalla y el contenido sea mayor o igual que 300px se va a agregar la clase a los contenedores que fueron tomados con la id. esta clase tiene asignada una transición en los estilos para pasar de un unto a otro del inicio al final.
    if (distancia_skills >= 300) {
        document.getElementById("sk").classList.add("skills__barra--sk");
        document.getElementById("ai").classList.add("skills__barra--ai");
        document.getElementById("max").classList.add("skills__barra--max");
        document.getElementById("blender").classList.add("skills__barra--blender");
        document.getElementById("ps").classList.add("skills__barra--ps");
        document.getElementById("figma").classList.add("skills__barra--figma");
    }
}