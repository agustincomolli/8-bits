/**
 * URL base para solicitudes al backend que contiene la ruta base del API.
 */
// const URL = "http://localhost:5000";
const URL = "https://8-bits-backend-production.up.railway.app";

/**
 * Elemento del formulario HTML usado para agregar o editar servicios.
 */
const addForm = document.querySelector(".service-form");

/**
 * Botón para cancelar la edición y volver a la página de administración de servicios.
 */
const btnCancel = document.querySelector("#btn-service-cancel");

/**
 * Obtiene el ID del plan desde los parámetros de la URL.
 *
 * @returns {string} El valor del ID del plan o null si no está presente.
 */
function getPlanId() {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    return urlSearchParams.get("id");
};

/**
 * Carga los datos del plan en el formulario de actualización basándose en el ID proporcionado.
 * 
 * @param {string} planId El ID del plan del que se cargarán los datos.
 */
async function loadPlanData(planId) {
    try {
        const response = await fetch(`${URL}/plan/${planId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        const plan = await response.json();
        document.querySelector("#input-plan-name").value = plan.name;
        document.querySelector("#input-plan-price").value = plan.price;
        
        // Quita la clase 'hidden' una vez que los datos se han cargado.
        addForm.classList.remove("hidden");
    } catch (error) {
        console.error('Error al cargar los datos del plan:', error);
    };
};

/**
 * Gestionar la edición de un plan. Esta función se invoca cuando se envía el formulario.
 *
 * @param {Event} event El evento de envío del formulario.
 */
async function editPlan(event) {
    event.preventDefault();  // Evita que se recargue la página.
    const planId = getPlanId();
    const dataPlan = {
        name: document.querySelector("#input-plan-name").value,
        price: document.querySelector("#input-plan-price").value,
    };

    try {
        const response = await fetch(`${URL}/plan/${planId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataPlan)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        console.log("Editado con exito");
        window.location.href = "./admin-plans.html";
    } catch (error) {
        console.error('Error al actualizar el plan:', error);
    };
};

/**
 * Define el comportamiento cuando el documento HTML ha sido cargado completamente.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Maneja el envío del formulario invocando la función de edición del plan.
    addForm.addEventListener("submit", editPlan);
    // Redirige al usuario a la lista de planes al hacer click en cancelar.
    btnCancel.addEventListener("click", () => { window.location.href = './admin-plans.html'; });

    // Obtiene el ID del plan de la URL y carga los datos asociados.
    const planId = getPlanId();
    if (planId) {
        loadPlanData(planId);
    }
});