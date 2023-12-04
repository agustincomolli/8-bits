/**
 * URL base del servidor backend. Se utiliza para realizar solicitudes HTTP al
 * servidor, especificando la ruta base del API.
 */
// const URL = "http://localhost:5000";
const URL = "https://8-bits-backend-production.up.railway.app";

// Obtiene un referencia al formulario de login para interactuar con él.
const loginForm = document.querySelector(".login-form");
// Selecciona el botón de cancelar para manejar el evento de click y redirigir al usuario.
const btnCancel = document.querySelector("#btn-login-cancel");

/**
 * Muestra un mensaje de error debajo del formulario de login.
 * @param {string} message - Mensaje de error a mostrar al usuario.
 */
function displayErrorMessage(message) {
    // Selecciona el elemento HTML destinado para mostrar mensajes de error.
    const errorElement = document.querySelector(".login-error-message");
    // Establece el texto del mensaje de error.
    errorElement.textContent = message;
};

/**
 * Envía los datos de acceso del usuario al backend para su autenticación.
 * 
 * @param {Object} formData - Objeto conteniendo el username y password.
 * @returns {Promise} La promesa resultante de la solicitud fetch.
 */
function sendData(formData) {
    // Concatena la URL base con la ruta específica para la autenticación e inicia la solicitud POST.
    return fetch(URL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Indica que el cuerpo de la solicitud es un JSON.
        },
        body: JSON.stringify(formData), // Convierte los datos del formulario a JSON.
    });
};

/**
 * Maneja el evento de enviar formulario de login.
 * PreventDefault evita que el formulario se envíe de manera predeterminada (form submission).
 * 
 * @param {Event} event - Objeto del evento que contiene información sobre el evento del formulario.
 */
async function login(event) {
    event.preventDefault();

    // Recolecta los valores ingresados por el usuario en los campos del formulario de login.
    const username = document.querySelector("#login-user-name").value;
    const password = document.querySelector("#login-password").value;

    // Empaqueta los datos de username y password en un objeto.
    const formData = { username, password };

    try {
        // Espera la respuesta del servidor después de enviar los datos de login.
        const response = await sendData(formData);

        // Procesa la respuesta para obtener la información en formato JSON.
        const data = await response.json();

        if (data.status == "ok") {
            // Guarda en el sessionStorage del navegador que el usuario ha iniciado sesión.
            sessionStorage.setItem("isLoggedIn", JSON.stringify(data.is_logged));
            // Redirige al usuario a la página 'admin-services.html'.
            window.location.href = './admin-services.html';
        } else {
            // Si el status no es ok, muestra el mensaje de error proveniente del servidor.
            throw new Error(data.message);
        };
    } catch (error) {
        // Captura cualquier error durante el proceso de login y lo muestra.
        displayErrorMessage(error);
    };
};

// Añade el manejador de evento para iniciar la lógica de login cuando se envíe el formulario.
loginForm.addEventListener("submit", login);

// Añade un evento de 'click' al botón de cancelar para redireccionar al usuario a 'index.html'.
btnCancel.addEventListener("click", () => { window.location.href = '../index.html'; });