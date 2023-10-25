const provincesSelector = document.querySelector("#contact-province");


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
 * Función que realiza una solicitud HTTP para obtener las ciudades de una provincia
 * a través de una API de datos gubernamentales.
 * @param {string} province - El nombre de la provincia de la que se desean obtener las ciudades.
 * @returns {Promise} - Una promesa que resuelve a un objeto JSON con información de las ciudades.
 */
function getCities(province) {
    return fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${province}&max=200`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

/**
 * Función que llena un selector HTML con opciones de ciudades.
 * @param {Array} cities - Un array de objetos que representan las ciudades a agregar al selector.
 */
function fillCities(cities) {
    const citiesSelector = document.querySelector("#contact-city");
    citiesSelector.innerHTML = "";
    for (let city of cities) {
        const optionCity = document.createElement("option");
        optionCity.text = city.nombre;
        citiesSelector.appendChild(optionCity);
    };

    // Si la provincia seleccionada es "Buenos Aires," se selecciona automáticamente la ciudad "Cañuelas."
    if (provincesSelector.value == "Buenos Aires") {
        citiesSelector.value = "Cañuelas";
    } else {
        // Si la provincia no es "Buenos Aires," se agrega una opción predeterminada "Ciudad."
        const optionDefault = document.createElement("option");
        optionDefault.text = "Ciudad";
        optionDefault.setAttribute("disabled", "");
        optionDefault.setAttribute("selected", "");
        optionDefault.setAttribute("hidden", "");
        citiesSelector.appendChild(optionDefault);
    };
}

/**
 * Función asincrónica que se ejecuta cuando se cambia la provincia seleccionada.
 * Obtiene las ciudades de la provincia y las muestra en el selector de ciudades.
 */
async function changeProvince() {
    // Obtiene el nombre de la provincia seleccionada en el selector de provincias.
    const provinceSelected = provincesSelector.selectedOptions[0].text;

    // Realiza una solicitud asincrónica para obtener la información de las ciudades de la provincia.
    const infoCities = await getCities(provinceSelected);

    // Si se obtienen ciudades, se ordenan alfabéticamente y se llenan en el selector de ciudades.
    if (infoCities.municipios.length > 0) {
        let cities = infoCities.municipios;
        cities.sort((a, b) => a.nombre.localeCompare(b.nombre));
        fillCities(cities);
    };
}


/**
 * Llena un elemento select en el documento con opciones que representan las provincias de Argentina.
 */
async function fillProvincesSelector(provincesSelector) {
    // const provincesSelector = document.querySelector("#contact-province");
    const citiesSelector = document.querySelector("#contact-city");
    const infoProvinces = await getProvinces();

    if (infoProvinces.provincias.length > 0) {
        let provinces = infoProvinces.provincias;

        // Ordena las provincias alfabéticamente por nombre.
        provinces.sort((a, b) => a.nombre.localeCompare(b.nombre));

        // Crea opciones para cada provincia y las agrega al elemento select.
        for (let province of provinces) {
            const optionProvince = document.createElement("option");
            // Truncar el nombre de la provincia si es muy largo.
            if (province.nombre.length > 31) {
                province.nombre = province.nombre.substring(0, 30) + "...";
            }
            optionProvince.text = province.nombre;
            provincesSelector.appendChild(optionProvince);
        };
        // Habilitar el selector de ciudades.
        citiesSelector.removeAttribute("disabled");
        // Establecer la provincia predeterminada.
        provincesSelector.value = "Buenos Aires";
        changeProvince();
    };
};


provincesSelector.addEventListener("change", changeProvince);
fillProvincesSelector(provincesSelector);