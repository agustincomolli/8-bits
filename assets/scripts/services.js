/**
 * URL base del servidor backend que indica la ruta para realizar solicitudes al API.
 */
// const URL = "http://localhost:5000";
const URL = "https://8-bits-backend-production.up.railway.app";

/**
 * Crea una tarjeta HTML con los datos de un servicio.
 * 
 * @param {Object} service - Un objeto que contiene los detalles de un servicio, como nombre y descripción.
 * @returns {string} Una cadena de texto que representa una tarjeta HTML con los datos del servicio.
 */
function createCard(service) {
    let card = `
    <div class="card-service">
    <h3 class="service-title">${service.name}</h3>
    <p class="service-description">${service.description}</p>
    </div>`;
    return card;
};

/**
 * Obtiene y muestra los servicios del backend.
 * Realiza una petición HTTP para obtener los datos de los servicios y luego 
 * los muestra en la página usando tarjetas HTML.
 */
async function getServices() {
    try {
        // Realiza una solicitud GET para obtener los servicios.
        const response = await fetch(URL + "/services");

        // Verifica si la solicitud no fue exitosa y lanza un error si es necesario.
        if (!response.ok) {
            throw new Error(`¡Error HTTP! estado: ${response.status}`);
        };

        // Procesa la respuesta convirtiéndola de JSON a un array de objetos de servicio.
        const data = await response.json();

        // Guarda el HTML de todas las tarjetas de servicio.
        let allCards = `
            <div class="service-icon-wrapper">
                <img src="../assets/images/services.webp" alt="">
            </div>`;

        // Itera sobre cada servicio, crea su tarjeta y la acumula en la cadena de tarjetas.
        data.forEach(service => {
            allCards += createCard(service);
        });

        // Establece el HTML interno de la lista de tarjetas para mostrar todas las tarjetas 
        // de servicios en la página.
        document.querySelector(".services").innerHTML = allCards;

    } catch (error) {
        // Muestra un mensaje de error en la consola si ocurre algún error al obtener o procesar los datos.
        console.error('Error al obtener los datos:', error);
    }
};

/**
 * Agrega un escuchador para el evento 'DOMContentLoaded' que llama a 
 * getServices una vez que el contenido de la página se carga completamente.
 */
document.addEventListener("DOMContentLoaded", getServices);