/**
 * URL base del servidor backend.
 */
const URL = "http://localhost:5000";

/**
 * Crea una fila de tabla HTML para cada servicio.
 * @param {Object} service - Objeto que contiene los detalles del servicio.
 * @returns {string} Una cadena de texto que representa una fila de tabla en HTML.
 */
function createRow(service) {
  // Plantilla de fila de tabla con los datos del servicio y acciones de editar/eliminar.
  let tableRow = `
    <tr class="service-row">
    <td class="service-name">${service.name}</td>
    <td class="service-description">${service.description}</td>
    <td>
      <div class="action-wrapper">
        <button class="btn-edit btn-crud" title="Editar"  data-service-id=${service.id}>
          <img src="../assets/icons/edit.svg" alt="Editar">
        </button>
        <button class="btn-delete btn-crud" title="Eliminar" data-service-id=${service.id}>
          <img src="../assets/icons/delete.svg" alt="Eliminar">
        </button>
      </div>
    </td>
  </tr>`
  return tableRow
};

/**
 * Obtiene los servicios del servidor y actualiza la tabla del DOM con los datos recibidos.
 */
async function getServices() {
  try {
    // Hacer una petición GET para obtener los servicios.
    const response = await fetch(URL + "/services");
    // Lanzar un error si la respuesta no es satisfactoria.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parsear la respuesta JSON recibida.
    const data = await response.json();
    let tableBody = "";
    // Construir el cuerpo de la tabla agregando las filas de servicios.
    data.forEach(service => {
      tableBody += createRow(service)
    })
    // Insertar el cuerpo de la tabla en el DOM.
    document.querySelector(".services-list").innerHTML = tableBody;

  } catch (error) {
    // Manejar errores de la petición y mostrar en consola.
    console.error('Error al obtener los datos:', error);
  }
};

/**
 * Envía una solicitud para eliminar un servicio al backend.
 * 
 * @param {number} serviceId - ID del servicio que se eliminará.
 */
async function deleteService(serviceId) {
  try {
    const response = await fetch(URL + "/service/" + serviceId, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Crea y muestra una alerta personalizada con los mensajes.
    const alertTitle = "Eliminar servicio";
    const alertMessage = "El servicio fue eliminado exitosamente. 🗑️";
    const myAlert = new CustomAlert(alertTitle, alertMessage);
    myAlert.showAlert();

    // Actualizar esa lista de servicios.
    getServices();

  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    // Informar al usuario del error.
    const alertTitle = "Eliminar servicio";
    const alertMessage = "⚠️ Error al eliminar el servicio: " + error;
    const myAlert = new CustomAlert(alertTitle, alertMessage);
    myAlert.showAlert();
  }
}

function addClickEventButtons() {
  // Selecciona el elemento padre (el tbody de la tabla con clase '.services-list')
  // y delega el evento 'click'.
  document.querySelector(".services-list").addEventListener("click", function (event) {
    // Event delegation: Chequea si se hizo clic en el botón btn-delete.
    if (event.target.closest(".btn-delete")) {
      // Asumiendo que el botón de eliminar contiene una imagen
      // y que el botón contiene el atributo data-service-id
      const serviceId = event.target.closest(".btn-delete").dataset.serviceId;
      deleteService(serviceId);
    } else if (event.target.closest(".btn-edit")) {
      const serviceId = event.target.closest(".btn-edit").dataset.serviceId;
      // Redirige a la página para editar el servicio.
      window.location.href = `./edit-service.html?id=${serviceId}`;
    }
  });
};

/**
 * Evento que escucha cuando se termina de cargar el contenido del documento,
 * y ejecuta la función getServices para actualizar la tabla de servicios.
 * Delega event handler para los botones de eliminar.
 */
document.addEventListener("DOMContentLoaded", () => {
  getServices().then(() => {
    // Asegurarse de que esto se llama después de que los servicios han sido 
    // cargados y los botones de eliminar están presentes.
    addClickEventButtons();
  });
});