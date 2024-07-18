//MENU DESPLEGABLE MOBILE//

//cree las variables en las que selecciono los elementos del menú a utilizar
const nav = document.querySelector(".navbar__menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

//Creo un evento para el icono de menu desplegable, de modo que al hacerle click se agrega la clase visible que lo muestra.
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

//Creo un evento para el icono de cerrar, de modo que al hacerle click se quita la clase visible y se oculta el menú desplegable.
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//PLANTILLA DE PROYECTOS//
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del proyecto de los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    //se crea un objeto que con tiene los datos de cada proyecto. Cada propiedad contienen otros objetos con más propiedades que son las que se tomarán para rellenar la información del html. 
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
            subtitle: "Diseño de Terraza y Bar.",
            description: "El Hotel Comodoro es un hotel de sol y playa ubicado en La Habana, Cuba. Este proyecto se caracterizó por el uso de recursos tropicales para adaptarse al contexto. Todos los materiales planteados son resistentes al salitre e intemperie. El resultado es un espacio muy acogedor y cálido en el que predominan las texturas naturales y el empleo de vegetación.",
            mainImage: "assets/HotelComodoro1.webp",
            images: ["assets/HotelComodoro2.webp", "assets/HotelComodoro3.webp", "assets/HotelComodoro4.webp","assets/HotelComodoro5.webp", "assets/HotelComodoro6.webp", "assets/HotelComodoro7.webp"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto4": {
            title: "CERVECERÍA LA PELOTA",
            subtitle: "Rediseño de interiores",
            description: "El concepto visual de la cervecería busca generar una imágen de antigüedad y tradición, a partir de la combinación de los estilos industrial y vintage. Predomina la combinación de textura del ladrillo, con la herrería y elementos constructivos a vista (tuberías). El color negro en techos aporta una visualidad elegante al espacio y baja perceptivamente el puntal. ",
            mainImage: "assets/LaPelota.webp",
            images: ["assets/LaPelota4.webp", "assets/LaPelota2.webp", "assets/LaPelota3.webp","assets/LaPelota5.webp", "assets/LaPelota6.webp", "assets/LaPelota7.webp", "assets/LaPelota8.webp", "assets/LaPelota9.webp"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto5": {
            title: "HOTEL ROYALTON HICACOS",
            subtitle: "Diseño de Terraza y Cocina industrial",
            description: "En el diseño de la terraza predominan los colores claros con gamas entre el azul y los tonos arena. En este se combina el uso de madera y piedras naturales como el mármol y el cemento en mobiliario. El mobiliario es contrastante fundamentalmente en cuanto a su peso perceptivo, intercalando entre distintas tipologías de mesas, sillas y sofás. En la cocina predominan las funciones prácticas, ajustando todos los tránsitos y espacios ergonómicamente. En cuanto a las funciones comunicativas, se mantendrá al igual que en el buffet el predominio del color blanco con contraste por color y textura con gamas azules y amarillas.",
            mainImage: "assets/royaltonhicacos1.webp",
            images: ["assets/royaltonhicacos2.webp", "assets/royaltonhicacos5.webp", "assets/royaltonhicacos6.webp"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto6": {
            title: "CERVECERÍA TRES HERMANOS",
            subtitle: "Rediseño de área de consumo e industria",
            description: "En estos espacios se combinan el estilo industrial con elementos contemporáneos del mobiliario. El concepto visual de la cervecería busca generar una imágen de antigüedad y tradición, como la elaboración de cerveza artesanal. Predomina la combinación de textura del ladrillo, con la herrería y elementos constructivos a vista (tuberías). El color negro en techos aporta una visualidad elegante al espacio y baja perceptivamente el puntal.",
            mainImage: "assets/3HermanosInteriores1.webp",
            images: ["assets/3HermanosInteriores2.webp", "assets/3HermanosInteriores3.webp", "assets/3HermanosInteriores4.webp", "assets/3HermanosInteriores5.webp", "assets/3HermanosInteriores6.webp", "assets/3HermanosInteriores7.webp"],
            skills: ["3D MAX", " SketchUp", " CoronaRender", " Photoshop"]
        },
        "proyecto7": {
            title: "AGILE",
            subtitle: "Identidad y Naming",
            description: "Agile es una escuela de natación enfocada principalmente en niños, aunque también dan clases a adultos. La escuela promueve la necesidad del ejercicio físico y los beneficios de la natación, por lo que para el nombre se decidión utilizar una palabra corta que denotara movimiento y agilidad, esta debía ser entendida en inglés, ya que la escuela está ubicada en Estados Unidos. El isotipo representa a una persona nadando de un modo sutil, pero entendible, con mucha sinuosidad para representar el movimiento. Las curvas del isotipo fueron empleadas en la creación de varios patrones que pueden ser usados como recursos gráficos. para la gama de colores se emplearon dos tonos de azul y un color naranja de contraste que le confiere dinamismo a la marca",
            mainImage: "assets/Agile1.webp",
            images: [ "assets/Agile2.webp", "assets/Agile3.webp", "assets/Agile4.webp", "assets/Agile5.webp", "assets/Agile6.webp",],
            skills: ["Illustrator"," Photoshop"]
        },
        "proyecto8": {
            title: "CACHARRO",
            subtitle: "Diseño de Identidad de Marca",
            description: "Cacharro es una marca para un footruck de venta de comida rápida como hotdogs y hamburguesas. El nombre y el logo están inspirados un personaje de dibujos animados muy conocidos en Cuba llamado cacharro. Se buscaba un poco la personificación del personaje para que fuese más atrayende. La gama de coloresy elementos gráficos determinan que sea una marca divertida e informal, ambos aspectos que buscaba el cliente. ",
            mainImage: "assets/cacharro1.webp",
            images: ["assets/cacharro2.webp", "assets/cacharro3.webp",],
            skills: ["Illustrator"," Photoshop"]
        },
        "proyecto9": {
            title: "BLAN.K",
            subtitle: "Diseño de Identidad de Marca y Naming",
            description: "Blan.K es una identidad conceptualizada para una marca de productos de limpieza. El naming parte de que la empresa tiene registrados bajo su nombre varias marcas que emplean el .k. El nombre BLAN.K resultaba adecuado porque no solo cumplía con el requisito de la letra K, sino que es corto, memorable y connota limpieza. Para las gamas de colores se emplearon dos tonos de azul que ayudan a reforzar el concepto de limpieza. El punto se integró en el logo a modo de gota que completa la letra K.",
            mainImage: "assets/blank1.webp",
            images: ["assets/blank2.webp", "assets/blank3.webp"],
            skills: ["Illustrator"," Photoshop"]
        },
        "proyecto10": {
            title: "FRESSCO",
            subtitle: "Diseño de Identidad de Marca y Naming",
            description: "Fressco es un nombre y concepto creado para una empresa de distribución de alimentos del mar, principalmente para restaurantes y negocios. La idea del cliente era que debía ser muy contemporáneo e innovador para atraer a nuevos públicos y diferenciarse de la competencia. Se creó un diseño de logo simple e imperecedero, pero con el rasgo característico de las dos ss, que unidas formas una ola. El elemto más característico del logotipo puede ser usado individualmente, lo que lo hace más versátil y fácil de recordar. Las gamas de colores son muy contrastantes, con el rojo de color principal y el azul de secundario para diferenciarse de la competencia. Se recomienda el uso de recursos gráficos con estilo dibujado o vintage para no perder la esencia de las pescaderías de barrio de toda la vida. El uso de transparencias aporta un toque personal y muy contemporáneo a las aplicaciones gráficas y a las posibles publicaciones en redes sociales. ",
            mainImage: "assets/fressco1.webp",
            images: ["assets/fressco2.webp", "assets/fressco3.webp", "assets/fressco4.webp","assets/fressco5.webp", "assets/fressco6.webp"],
            skills: ["Illustrator"," Photoshop"]
        },
        "proyecto11": {
            title: "TRES HERMANOS",
            subtitle: "Diseño de Identidad Visual para marca y cerveza artesanal",
            description: "Tres hermanos es la cervezería artesanal que pueden encontrar en los proyectos de interiores de este portafolio. La empresa además del diseño de interiores necesitaban una marca que los representara a ellos y a las cervezas artesanales que venden. Por tanto se crea el logotipo de tres hermanos, que en su versión simple representará a la marca y que en otras aplicaciones funciona como etiqueta de las cervezas. La selección tipográfica san serif da un aspecto contemporáneo y a su con el efecto envejecido pueda remitir a la tradicion artesanal. Las gamas de color se emplearon siguiendo los colores terrosos y desaturados para conservar la impresión de antiguo y tradicional.  ",
            mainImage: "assets/tresHermanos1.webp",
            images: ["assets/tresHermanos2.webp", "assets/tresHermanos3.webp", "assets/tresHermanos4.webp", "assets/tresHermanos5.webp"],
            skills: ["Illustrator"," Photoshop"]
        },
        "proyecto12": {
            title: "LOS ADOQUINES",
            subtitle: "Diseño de Identidad visual",
            description: "Los Adoquines es un restaurante campestre que se encuentra en La Habana, Cuba.Uno de sus principales característica era la vegetación, por lo que el cliente sabía que quería usar verde en la propuesta, color que se complementó con un naranja para los contrastes y un par de colores para aplicaciones en redes sociales menos llamativas. El aspecto más interesante del isotipo es que al ser usado independiente y con algunas rotaciones y transformaciones crea patrones muy variados como hacen los adoquines reales. ",
            mainImage: "assets/losAdoquines1.webp",
            images: ["assets/losAdoquines2.webp", "assets/losAdoquines3.webp", "assets/losAdoquines4.webp", "assets/losAdoquines5.webp", "assets/losAdoquines6.webp"],
            skills: ["Illustrator"," Photoshop"]
        }
    };

    // Verifica si existe el projectId
    if (projectId && projectsData[projectId]) {
        const projectData = projectsData[projectId];

        // Se agrega texto interiorÑ título, subtítulo,descripción y habilidades a partir de los ids de los eleetos de html.
        document.getElementById('project-title').textContent = projectData.title;
        document.getElementById('project-subtitle').textContent = projectData.subtitle;
        document.getElementById('project-description').textContent = projectData.description;
        document.getElementById('project-skills').textContent = projectData.skills;

        // Asigna la imagen principal y toma como texto alternativo el titulo del proyecto.
        const mainImageElement = document.getElementById('project-main-image');
        mainImageElement.src = projectData.mainImage;
        mainImageElement.alt = projectData.title;
    
        // Hace lo mismo que el anterior, con el contenedor de las imagenes adicionales.
        const extraImagesContainer = document.getElementById('project-extra-images');
        projectData.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = projectData.title;
            extraImagesContainer.appendChild(imgElement);
        });
    } else {
        // Si no encuentra el id del proyecto envía un mensaje de error a la consola.
        console.error("ID de proyecto no válido o no encontrado");
    }
});
