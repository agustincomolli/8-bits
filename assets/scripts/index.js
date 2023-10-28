/**
 * Valida un número de teléfono en Argentina.
 *
 * @param {string} phoneNumber - El número de teléfono a validar.
 * @returns {boolean} - Devuelve true si el número de teléfono es válido, de lo contrario, devuelve false.
 */
function isValidPhone(phoneNumber) {
    // Eliminar cualquier caracter no numérico de la cadena
    const onlyNumbers = phoneNumber.replace(/\D/g, '');

    // Patrón de expresión regular para validar números de teléfono en Argentina
    const phonePattern = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    // Comprobar si el número coincide con el patrón
    return phonePattern.test(onlyNumbers);
}


const testPhoneNumbers = ["+5492226680056", "(+54)902226815680056", "02226421577", "(2226)15680056"];

for (phone of testPhoneNumbers) {
    console.log(`${phone} es ${isValidPhone(phone)}`);
};
