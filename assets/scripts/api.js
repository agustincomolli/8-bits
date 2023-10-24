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


function getCities(province) {
    return fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${province}&max=200`)
        .then(response => response.json())
        .catch(error => console.log(error));
}


function fillCities(cities) {
    const citiesSelector = document.querySelector("#cities");
    citiesSelector.innerHTML = "";
    for (let city of cities) {
        const optionCity = document.createElement("option");
        optionCity.text = city.nombre;
        citiesSelector.appendChild(optionCity);
    };
    citiesSelector.value = "Cañuelas";
};


async function changeProvince() {
    let provinceSelected = provincesSelector.selectedOptions[0].text;
    const infoCities = await getCities(provinceSelected);

    if (infoCities.municipios.length > 0) {
        let cities = infoCities.municipios;
        cities.sort((a, b) => a.nombre.localeCompare(b.nombre));
        fillCities(cities);
    };
};


/**
 * Llena un elemento select en el documento con opciones que representan las provincias de Argentina.
 */
async function fillProvincesSelector() {
    const provincesSelector = document.querySelector("#contact-province");
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
    };
};


fillProvincesSelector();