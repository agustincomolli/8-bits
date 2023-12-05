/**
 * Carga y muestra el precio del plan base.
 */
async function loadBasePrice() {
    const labelPlanBase = document.querySelector(".index-plan-base");
    const basePlanId = 1;
    
    try {
        // Llama a `getPlanData` con el plan ID 1 y espera por la respuesta.
        // Actualiza el innerHTML del elemento con el precio obtenido.
        labelPlanBase.innerHTML = await getPlanData(basePlanId);
    } catch (error) {
        // Manejar errores posiblemente ocurridos en `getPlanData` o en la promesa.
        console.error('Error cargando el precio base del plan:', error);
    }
}

loadBasePrice();