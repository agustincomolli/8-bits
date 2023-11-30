/**
 * URL base del servidor backend. Se utiliza para realizar solicitudes HTTP al
 * servidor, especificando la ruta base del API.
 */
const URL = "http://localhost:5000";

// Selecciona el formulario en el documento para manejar el evento de envío.
const addForm = document.querySelector(".service-form");
// Selecciona el botón de cancelar para manejar el evento de click.
const btnCancel = document.querySelector("#btn-service-cancel");


function getServiceId() {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    return urlSearchParams.get("id");
};


async function loadServiceData(serviceId) {
    try {
        const response = await fetch(`${URL}/service/${serviceId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        const service = await response.json()
        document.querySelector("#input-service-name").value = service.name;
        document.querySelector("#input-service-description").value = service.description;
    } catch (error) {
        console.error('Error al cargar los datos del servicio:', error);
    };
};


function editService() { };

document.addEventListener("DOMContentLoaded", () => {
    // Añade un evento de 'submit' al formulario para ejecutar la función 'addService'.
    addForm.addEventListener("submit", editService);
    // Añade un evento de 'click' al botón de cancelar para redirigir al usuario.
    btnCancel.addEventListener("click", () => { window.location.href = './admin-services.html'; });

    const serviceId = getServiceId();
    loadServiceData(serviceId);
});