/**
 * Clase CustomAlert para crear alertas personalizadas en una página web.
 */
class CustomAlert {
    #title; // Campo privado para el título de la alerta
    #message; // Campo privado para el mensaje de la alerta

    /**
     * Constructor de la clase CustomAlert.
     * @param {string} title - Título de la alerta (opcional, por defecto es "¡Alerta!").
     * @param {string} message - Mensaje de la alerta (opcional, por defecto es "Escribe tu mensaje aquí").
     */
    constructor(title = "¡Alerta!", message = "Escribe tu mensaje aquí") {
        this.#title = title;
        this.#message = message;
        this.createAlert();
        this.attachEvents();
    };

    /**
     * Crea la estructura HTML de la alerta y la agrega al cuerpo del documento.
     */
    createAlert() {
        this.alertDiv = document.createElement("div");
        this.alertDiv.id = "custom-alert";
        this.alertDiv.className = "custom-alert hidden-alert";
        this.alertContent = `
            <div class="alert-box animate__animated animate__backInDown">
                <span class="close-alert" id="close-alert" title="Cerrar">&times;</span>
                <h2 class="alert-title">${this.#title}</h2>
                <p class="alert-message">${this.#message}</p>
                <button class="alert-button-ok send-btn" id="alert-button-ok">Aceptar</button>
            </div>
        `;
        this.alertDiv.innerHTML = this.alertContent;
        document.body.appendChild(this.alertDiv);
    };

    /**
     * Asocia eventos a los elementos de la alerta.
     */
    attachEvents() {
        const closeAlert = document.querySelector("#close-alert");
        closeAlert.onclick = () => { this.closeAlert() };

        const btnOK = document.querySelector("#alert-button-ok");
        btnOK.onclick = () => { this.closeAlert() };
    };

    /**
     * Muestra la alerta al cambiar las clases CSS.
     */
    showAlert() {
        this.alertDiv.classList.toggle("hidden-alert");
        this.alertDiv.classList.toggle("overlay-alert");
    };

    /**
     * Cierra la alerta mostrando u ocultando la misma.
     */
    closeAlert() {
        this.showAlert();
    };
};
