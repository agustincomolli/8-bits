/**
 * Realiza una solicitud a la API de geolocalización para obtener información sobre las provincias de Argentina.
 *
 * @returns {Promise} Una promesa que se resuelve con los datos de las provincias o se rechaza con un error.
 */
function getProvinces() {
    return fetch(`https://apis.datos.gob.ar/georef/api/provincias`)
        .then(response => response.json())
        .catch(error => console.log(error)); // Maneja errores de la solicitud.
}

/**
 * Llena un elemento select en el documento con opciones que representan las provincias de Argentina.
 */
async function fillProvincesSelector() {
    const provincesSelector = document.querySelector("#provinces");
    const infoProvinces = await getProvinces();

    if (infoProvinces.provincias.length > 0) {
        let provinces = infoProvinces.provincias;

        // Ordena las provincias alfabéticamente por nombre.
        provinces.sort((a, b) => a.nombre.localeCompare(b.nombre));

        // Crea opciones para cada provincia y las agrega al elemento select.
        for (let province of provinces) {
            const optionProvince = document.createElement("option");
            optionProvince.text = province.nombre;
            provincesSelector.appendChild(optionProvince);
        };
    };
};

