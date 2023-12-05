/**
 * URL base para solicitudes al backend que contiene la ruta base del API.
 */
const URL = "http://localhost:5000";
// const URL = "https://8-bits-backend-production.up.railway.app";


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
 * Obtiene datos de un plan específico desde un API y formatea su precio.
 * 
 * @param {string} planId - El identificador único del plan cuyos datos se están solicitando.
 * @returns {Promise<string>} Una promesa que se resuelve en la cadena de texto que representa 
 *                            el precio formateado del plan o se rechaza con un error.
 */
async function getPlanData(planId) {
    try {
        // Intenta realizar una solicitud HTTP GET al API para obtener datos del plan.
        const response = await fetch(`${URL}/plan/${planId}`);

        // Verifica si la respuesta es exitosa (código de estado HTTP 200-299).
        if (!response.ok) {
            // Si no es exitosa, lanza un error personalizado mostrando el estado HTTP.
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Si la respuesta es exitosa, procesa y convierte la respuesta a JSON.
        const plan = await response.json();

        // Formatea el precio utilizando una función previamente definida y devuelve el valor.
        return formatPriceNumber(plan.price);

    } catch (error) {
        // Si ocurre un error durante la solicitud o el procesamiento de la respuesta, 
        // se registra en la consola con detalle.
        console.error('Error al cargar los datos del plan:', error);
    }
}