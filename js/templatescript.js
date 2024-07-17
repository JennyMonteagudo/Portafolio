// js/templatescript.js
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del proyecto de los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // Datos de los proyectos
    const projectsData = {
        "proyecto1": {
            title: "TOMASELLA",
            subtitle: "Diseño de Mobiliario e Interiores",
            description: "Tomasella es un proyecto realizado para un concurso de diseño de la empresa Desall. Consiste en el desarrollo de un sistema de mobiliario para habitaciones de hoteles de lujo. El sistema diseñado busca mezclar materiales de alta calidad como la madera semipreciosa, el cuero y los tapizados. Uno de sus mayores atributos es la modularidad para poder personalizar el sistema de acuerdo a las preferencias del usuario. Se presentan dos versiones de mesitas de noche que parten de la misma estructura, así como tres paneles modificables para el cabecero de la cama. ",
            mainImage: "assets/bedroom1.webp",
            images: ["assets/bedroom2.webp", "assets/bedroom3.webp", "assets/bedroom4.webp", "assets/bedroom5.webp", "assets/bedroom6.webp"],
            tools: ["assets/bedroom2.webp", "assets/bedroom2.webp", "assets/bedroom2.webp", "icon4.png", "icon5.png"],
            skills: ["3D MAX", " Corona Render", " SketchUp", " 3D MAX", " 3D MAX"]
        },
        "proyecto2": {
            title: "Título del Proyecto 2",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            mainImage: "assets/main2.jpg",
            images: ["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg"],
            tools: ["icon6.png", "icon7.png", "icon8.png", "icon9.png", "icon10.png"],
            skills: ["skill6.png", "skill7.png", "skill8.png", "skill9.png", "skill10.png"]
        }
        // Agrega más proyectos aquí
    };

    // Verificar si el projectId existe en los datos del proyecto
    if (projectId && projectsData[projectId]) {
        const projectData = projectsData[projectId];

        // Asignar título, subtítulo y descripción
        document.getElementById('project-title').textContent = projectData.title;
        document.getElementById('project-subtitle').textContent = projectData.subtitle;
        document.getElementById('project-description').textContent = projectData.description;
        document.getElementById('project-skills').textContent = projectData.skills;

        // Asignar imagen principal
        const mainImageElement = document.getElementById('project-main-image');
        mainImageElement.src = projectData.mainImage;
        mainImageElement.alt = projectData.title;

        // Asignar herramientas
        const toolsContainer = document.getElementById('project-tools');
        projectData.tools.forEach(tool => {
            const liElement = document.createElement('li');
            const imgElement = document.createElement('img');
            imgElement.src = tool;
            liElement.appendChild(imgElement);
            toolsContainer.appendChild(liElement);
        });

    
        // Asignar imágenes adicionales
        const extraImagesContainer = document.getElementById('project-extra-images');
        projectData.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = projectData.title;
            extraImagesContainer.appendChild(imgElement);
        });
    } else {
        // Manejo de errores si el projectId no es válido o no existe
        console.error("ID de proyecto no válido o no encontrado");
    }
});
