/**
 * URL base del servidor backend. Se utiliza para realizar solicitudes HTTP al
 * servidor, especificando la ruta base del API.
 */
const URL = "http://localhost:5000";

// Selecciona el formulario en el documento para manejar el evento de envío.
const addForm = document.querySelector(".service-form");
// Selecciona el botón de cancelar para manejar el evento de click.
const btnCancel = document.querySelector("#btn-service-cancel");


/**
 * Envía los datos del servicio al backend para su creación.
 * 
 * @param {Object} formData - Datos del formulario que se enviarán al servidor.
 * @returns La promesa resultante de la llamada a fetch().
 */
function sendData(formData) {
    // Realiza una solicitud POST al servidor con el formData en formato JSON.
    return fetch(URL + "/service", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
};

/**
 * Maneja el proceso de agregar un nuevo servicio.
 * 
 * Esta función se dispara cuando se envía el formulario de agregar servicio.
 * Recoge los datos del formulario, los envía al servidor y procesa la respuesta.
 * 
 * @param {Event} event - El evento de envío del formulario.
 */
async function addService(event) {
    // Previene el comportamiento por defecto del formulario de enviar la página.
    event.preventDefault();

    // Recoge los valores ingresados en los campos del formulario.
    const name = document.querySelector("#input-service-name").value;
    const description = document.querySelector("#input-service-description").value;

    // Crea un objeto con los datos recogidos del formulario.
    const formData = { name, description };

    try {
        // Espera a que la solicitud de envío de datos finalice.
        const response = await sendData(formData)

        // Si la respuesta no es 'ok', lanza un error personalizado.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        // Espera a que los datos de la respuesta estén disponibles en formato JSON.
        const data = await response.json();

        // Aquí asumimos que 'CustomAlert' y 'showAlert' ya están definidos en otro lugar.
        const alertTitle = "Agregar servicio";
        const alertMessage = "¡El nuevo servicio ha sido agregado exitosamente 😀!";
        // Crea y muestra una alerta personalizada con los mensajes.
        const myAlert = new CustomAlert(alertTitle, alertMessage);
        myAlert.showAlert();

        // Se imprime en consola para depuración. Esto no será visible para los usuarios finales.
        console.log("Datos:", data);

        // Reemplaza setInterval por setTimeout para redirigir después de un retraso.
        setTimeout(() => {
            // Redirige al usuario a la página de servicios de admin.
            window.location.href = './admin-services.html';
        }, 4000); // 4 segundos antes de redirigir
    } catch (error) {
        // Registra el error en la consola para la depuración.
        console.error('Error al agregar el servicio:', error);
        // Crea y muestra una alerta personalizada con los mensajes.
        const alertTitle = "Error al agregar el servicio";
        const alertMessage = error + " 😢";
        const myAlert = new CustomAlert(alertTitle, alertMessage);
        myAlert.showAlert();
    };
};

// Añade un evento de 'submit' al formulario para ejecutar la función 'addService'.
addForm.addEventListener("submit", addService);
// Añade un evento de 'click' al botón de cancelar para redirigir al usuario.
btnCancel.addEventListener("click", () => { window.location.href = './admin-services.html'; });