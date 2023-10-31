const formQuote = document.querySelector(".form-get-quote");


/**
 * Maneja el envío del formulario de contacto.
 *
 * @param {Event} event - El evento de envío del formulario.
 */
async function submitForm(event) {
    // Prevenir el envío del formulario para evitar una recarga de página.
    event.preventDefault();
    
    // Obtener los datos del formulario.
    const dataContact = new FormData(this);

    // Inicializar variables para el título y el mensaje de la alerta.
    let alertTitle = "";
    let alertMessage = "";

    // Enviar los datos del formulario al servidor de manera asíncrona.
    const response = await fetch(this.action, {
        method: this.method,
        body: dataContact,
        headers: {
            "Accept": "application/json"
        }
    });

    // Verificar si la respuesta del servidor es exitosa (código de respuesta 200).
    if (response.ok) {
        // Restablecer el formulario después de un envío exitoso.
        this.reset();
        alertTitle = "Su mensaje ha sido enviado exitosamente";
        alertMessage = "¡Gracias por contactarte con nosotros 😀!<br> Pronto nos comunicaremos con usted.";
    } else {
        alertTitle = "Su mensaje no pudo enviarse";
        alertMessage = "¡Ups! Hubo un problema al enviar su formulario 😥";
    }

    // Crear y mostrar una alerta personalizada con los mensajes.
    const myAlert = new CustomAlert(alertTitle, alertMessage);
    myAlert.showAlert();

};


formQuote.addEventListener("submit", submitForm);
