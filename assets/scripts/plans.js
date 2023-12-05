/**
 * Carga y muestra los precios de diferentes planes en la interfaz de usuario.
 */
async function loadPlansPrices() {
    // Selecciona todos los elementos con la clase 'price' en el DOM
    const labelsPlanPrice = document.querySelectorAll('.price');
    // Array de los IDs de los planes para los que se cargarán los precios
    const planIds = [1, 2, 3];

    try {
        // Itera sobre los IDs de los planes y obtiene el precio de cada uno
        for (let i = 0; i < planIds.length; i++) { 
            // Obtiene el precio del plan actual a través de una función asíncrona 'getPlanData'
            let price = await getPlanData(planIds[i]);
            // Elimina el símbolo de moneda del precio (asumiendo que los primeros dos caracteres son "$ ")
            price = price.substring(2);
            if (labelsPlanPrice[i]) {
                // Establece el contenido HTML del elemento actual con el precio formateado,
                // agregando el signo de dólar como un superíndice para un formato adecuado
                labelsPlanPrice[i].innerHTML = `<sup>$</sup>${price}`;
            } else {
                console.error('Elemento no encontrado para el plan con ID:', planIds[i]);
            }
        }
    } catch (error) {
        // Captura cualquier error que haya ocurrido durante la obtención o la manipulación del precio
        console.error('Error al cargar el precio de los planes:', error);
    }
}


// Llama a la función para cargar y mostrar los precios
loadPlansPrices();