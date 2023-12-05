/**
 * URL base del servidor backend.
 */
const URL = "http://localhost:5000";
// const URL = "https://8-bits-backend-production.up.railway.app";

const btnCloseSession = document.querySelector(".close-session")

/**
 * Esta función maneja el evento de cierre de sesión.
 * Realiza una petición al servidor para terminar la sesión y actualiza la interfaz de usuario.
 *
 * @param {Event} event - El evento que dispara la función.
 */
async function logout(event) {
  // Previene el comportamiento por defecto del evento, que podría ser la recarga de la página.
  event.preventDefault();

  try {
    // Realiza una solicitud POST al endpoint de logout del servidor.
    const response = await fetch(URL + "/logout", {
      method: "POST"
    });

    // Si la respuesta no es 'ok', lanza un error personalizado.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    // Espera a que los datos de la respuesta estén disponibles en formato JSON.
    const data = await response.json();

    // Comprueba si el estado en la respuesta es "ok", que indica que el logout fue exitoso.
    if (data.status == "ok") {
      // Remueve el estado de la sesión del almacenamiento de la sesión del navegador.
      sessionStorage.removeItem('isLoggedIn');
      window.location.href = '../index.html';
    };

  } catch (error) {
    // Captura y muestra errores en la consola si la solicitud falla.
    console.error('Falló el cierre de sesión', error);
  };
};


/**
 * Formatea un número como un precio en formato de moneda argentina (ARS).
 * 
 * @param {number} price - El número que representa el precio a formatear.
 * @returns {string} Una cadena de texto que representa el precio formateado con el símbolo de moneda argentina y un espacio después del signo de dólar.
 */
function formatPriceNumber(price) {
  // Crear un nuevo objeto Intl.NumberFormat para configurar las opciones de formateo de moneda.
  let formatter = new Intl.NumberFormat("es-AR", {
    style: "currency", // Indicar que el estilo del formateo es de tipo 'moneda'.
    currency: "ARS", // Establecer el tipo de moneda a Peso Argentino (ARS).
    maximumFractionDigits: 0, // No mostrar dígitos decimales en el precio formateado.
  });

  let formattedNumber = formatter.format(price);

  return formattedNumber;
};


/**
 * Crea una fila de tabla HTML para cada plan de mantenimiento.
 * @param {Object} plan - Objeto que contiene los detalles del plan.
 * @returns {string} Una cadena de texto que representa una fila de tabla en HTML.
 */
function createRow(plan) {
  // Plantilla de fila de tabla con los datos del plan y acciones de editar.
  let tableRow = `
    <tr class="service-row">
    <td class="admin-service-name plan-name">${plan.name}</td>
    <td class="admin-service-description plan-price">${formatPriceNumber(plan.price)}</td>
    <td>
      <div class="action-wrapper plan-action-wrapper">
        <button class="btn-edit btn-crud btn-edit-plan" title="Editar"  data-plan-id=${plan.id}>
          <img src="../assets/icons/edit.svg" alt="Editar">
          <span class="plan-update-label-btn">Actualizar valor</span>
        </button>
      </div>
    </td>
  </tr>`
  return tableRow
};

/**
 * Obtiene los planes del servidor y actualiza la tabla del DOM con los datos recibidos.
 */
async function getPlans() {
  try {
    // Hacer una petición GET para obtener los planes.
    const response = await fetch(URL + "/plans");
    // Lanzar un error si la respuesta no es satisfactoria.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parsear la respuesta JSON recibida.
    const data = await response.json();
    let tableBody = "";
    // Construir el cuerpo de la tabla agregando las filas de los planes.
    data.forEach(plan => {
      tableBody += createRow(plan)
    })
    // Insertar el cuerpo de la tabla en el DOM.
    document.querySelector(".services-list").innerHTML = tableBody;

  } catch (error) {
    // Manejar errores de la petición y mostrar en consola.
    console.error('Error al obtener los datos:', error);
  }
};


function addClickEventButtons() {
  // Selecciona el elemento padre (el tbody de la tabla con clase '.services-list')
  // y delega el evento 'click'.
  document.querySelector(".services-list").addEventListener("click", function (event) {
    // Event delegation: Chequea si se hizo clic en el botón btn-edit.
    if (event.target.closest(".btn-edit")) {
      const planId = event.target.closest(".btn-edit").dataset.planId;
      // Redirige a la página para editar el plan.
      window.location.href = `./edit-plan.html?id=${planId}`;
    }
  });
};

/**
 * Evento que escucha cuando se termina de cargar el contenido del documento,
 * y ejecuta la función getServices para actualizar la tabla de servicios.
 * Delega event handler para los botones de eliminar.
 */
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    // Redirige al login si no hay sesión
    window.location.href = './login.html';
  } else {
    btnCloseSession.addEventListener("click", logout);
    getPlans().then(() => {
      // Asegurarse de que esto se llama después de que los servicios han sido 
      // cargados y los botones de eliminar están presentes.
      addClickEventButtons();
    });
  };
});