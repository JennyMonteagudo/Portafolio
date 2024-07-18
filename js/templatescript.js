// js/templatescript.js
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del proyecto de los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // Datos de los proyectos
    const projectsData = {
        "proyecto1": {
            title: "IBEROSTAR PLAYA ALAMEDA",
            subtitle: "Rediseño de Lobby y Lobby Bar ",
            description: "El Hotel Iberostar Playa Alameda se encuentra ubicado en primera línea de la playa de Varadero, en Cuba, lo que determinó que todos los materiales sean resistentes a la humedad y al salitre. Este fue un proyecto academico, específicamente realizado como tesis de culminación de estudios, de la carrera de Diseño Industrial en la Universidad de la Habana. Como premisa se partía de conservar todos los elementos estructurales como las columnas del lobby y arcos propios de la edificación. Se mezclaron elementos de los estilos tropicales y el colonial, para hacer referencia a la alameda que lleva a la playa, por la que fue nombrado. El resultado es un espacio muy fresco y contemporáneo, pero con un poco de antigüedad, que le da ese toque especial",
            mainImage: "assets/IberostarPlayaAlameda1.webp",
            images: [ "assets/IberostarPlayaAlameda4.webp", "assets/IberostarPlayaAlameda5.webp", "assets/IberostarPlayaAlameda3.webp", "assets/IberostarPlayaAlameda6.webp", "assets/IberostarPlayaAlameda2.webp",],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto2": {
            title: "TOMASELLA",
            subtitle: "Diseño de Mobiliario e Interiores",
            description: "Tomasella es un proyecto realizado para un concurso de diseño de la empresa Desall. Consiste en el desarrollo de un sistema de mobiliario para habitaciones de hoteles de lujo. El sistema diseñado busca mezclar materiales de alta calidad como la madera semipreciosa, el cuero y los tapizados. Uno de sus mayores atributos es la modularidad para poder personalizar el sistema de acuerdo a las preferencias del usuario. Se presentan dos versiones de mesitas de noche que parten de la misma estructura, así como tres paneles modificables para el cabecero de la cama. ",
            mainImage: "assets/bedroom1.webp",
            images: ["assets/bedroom2.webp", "assets/bedroom3.webp", "assets/bedroom4.webp", "assets/bedroom5.webp", "assets/bedroom6.webp"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto3": {
            title: "HOTEL COMODORO",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            mainImage: "assets/main2.jpg",
            images: ["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto4": {
            title: "CERVECERÍA LA PELOTA",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            mainImage: "assets/main2.jpg",
            images: ["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto5": {
            title: "HOTEL ROYALTON HICACOS",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            mainImage: "assets/main2.jpg",
            images: ["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto6": {
            title: "CERVECERÍA TRES HERMANOS",
            subtitle: "Subtítulo del Proyecto 2",
            description: "Descripción detallada del Proyecto 2.",
            mainImage: "assets/main2.jpg",
            images: ["assets/img4.jpg", "assets/img5.jpg", "assets/img6.jpg"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
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
