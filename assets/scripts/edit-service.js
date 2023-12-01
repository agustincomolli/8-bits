/**
 * URL base para solicitudes al backend que contiene la ruta base del API.
 */
const URL = "http://localhost:5000";

/**
 * Elemento del formulario HTML usado para agregar o editar servicios.
 */
const addForm = document.querySelector(".service-form");

/**
 * Botón para cancelar la edición y volver a la página de administración de servicios.
 */
const btnCancel = document.querySelector("#btn-service-cancel");

/**
 * Obtiene el ID del servicio desde los parámetros de la URL.
 *
 * @returns {string} El valor del ID del servicio o null si no está presente.
 */
function getServiceId() {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    return urlSearchParams.get("id");
};

/**
 * Carga los datos del servicio en el formulario de actualización basándose en el ID proporcionado.
 * 
 * @param {string} serviceId El ID del servicio del que se cargarán los datos.
 */
async function loadServiceData(serviceId) {
    try {
        const response = await fetch(`${URL}/service/${serviceId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        const service = await response.json();
        document.querySelector("#input-service-name").value = service.name;
        document.querySelector("#input-service-description").value = service.description;
        
        // Quita la clase 'hidden' una vez que los datos se han cargado.
        addForm.classList.remove("hidden");
    } catch (error) {
        console.error('Error al cargar los datos del servicio:', error);
    };
};

/**
 * Gestionar la edición de un servicio. Esta función se invoca cuando se envía el formulario.
 *
 * @param {Event} event El evento de envío del formulario.
 */
async function editService(event) {
    event.preventDefault();  // Evita que se recargue la página.
    const serviceId = getServiceId();
    const dataService = {
        name: document.querySelector("#input-service-name").value,
        description: document.querySelector("#input-service-description").value,
    };

    try {
        const response = await fetch(`${URL}/service/${serviceId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataService)
        });

        if (!response.ok) {
            throw new Error("HTTP error! status: ${response.status}");
        };

        console.log("Editado con exito");
        window.location.href = "./admin-services.html";
    } catch (error) {
        console.error('Error al actualizar el servicio:', error);
    };
};

/**
 * Define el comportamiento cuando el documento HTML ha sido cargado completamente.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Maneja el envío del formulario invocando la función de edición del servicio.
    addForm.addEventListener("submit", editService);
    // Redirige al usuario a la lista de servicios al hacer click en cancelar.
    btnCancel.addEventListener("click", () => { window.location.href = './admin-services.html'; });

    // Obtén el ID del servicio de la URL y carga los datos asociados.
    const serviceId = getServiceId();
    if (serviceId) {
        loadServiceData(serviceId);
    }
});