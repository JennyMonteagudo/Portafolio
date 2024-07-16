document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    const projectsData = {
        "proyecto1": {
            title: "Título del Proyecto 1",
            subtitle: "Subtítulo del Proyecto 1",
            description: "Descripción detallada del Proyecto 1.",
            images: ["assets/bedroom2.webp", "img2.jpg", "img3.jpg"],
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
