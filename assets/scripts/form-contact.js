// import CustomAlert from "../scripts/custom-alert";

// Obtener el elemento de entrada de número de teléfono.
const contactPhone = document.querySelector("#contact-phone");


/* 

EXPRESIÓN REGULAR PARA VALIDAR TELÉFONOS DE ARGENTINA

^: Este símbolo representa el inicio de la cadena. Esto significa que la coincidencia debe 
comenzar al principio de la cadena de texto.

(?:(?:00)?549?)?: Esta parte es un grupo opcional. Permite números de teléfono 
argentinos que comiencen con "0054" o "54", que es el código de país para Argentina. Los 
paréntesis (?: ... ) se utilizan para agrupar sin capturar. La parte 00 es opcional (el 
operador ? hace que algo sea opcional) y representa la opción de marcar "00" antes del 
código de país. Luego, "549" representa el código de país sin los ceros iniciales, y el 
último ? hace que esta parte sea opcional en su totalidad.

0?: Esto permite que haya un "0" opcional después del código de país. En Argentina, es 
común que los números de teléfono comiencen con "0", por lo que este "0" es opcional.

(?:11|[2368]\d): Este grupo permite dos opciones para el prefijo de la ciudad. Puede 
ser "11" o un número que comienza con "2", "3", "6" u "8", seguido de cualquier dígito (\d). 
Estas son las áreas de código de área de Buenos Aires y otras áreas importantes en Argentina.

(?:(?=\d{0,2}15)\d{2})??: Este grupo es un poco más complicado. Comprueba si 
después del código de área, hay una secuencia de 2 dígitos que está seguida de "15". Los 
paréntesis ( ... )? indican que esto es opcional. El ?? al final significa que esto es 
también opcional. En resumen, esto permite números de teléfono que contienen "15" 
después del código de área, pero no lo requiere.

\d{8}: Esto representa exactamente 8 dígitos para el número de teléfono. La expresión 
regular valida que los dígitos sean números válidos (0-9).

$: Este símbolo representa el final de la cadena. Esto significa que la coincidencia debe 
terminar al final de la cadena de texto.

En resumen, la expresión regular valida números de teléfono en Argentina que pueden tener 
un código de país opcional (con o sin "00" antes de "54"), un "0" opcional después del código 
de país, un código de área válido en Argentina, una secuencia de 2 dígitos seguida de "15" 
opcionalmente y, finalmente, 8 dígitos válidos para el número de teléfono. Esta expresión 
regular es bastante flexible y puede adaptarse a diferentes formatos de números de teléfono 
en Argentina.
*/


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


/**
 * Valida un campo de número de teléfono en un formulario.
 *
 * @param {Event} event - El evento de envío del formulario.
 */
function validatePhone() {
    // Comprobar si el número de teléfono no es válido utilizando una función externa llamada isValidPhone.
    if (!isValidPhone(contactPhone.value)) {
        // Si el número de teléfono no es válido, establecer un mensaje de error personalizado.
        contactPhone.setCustomValidity("El número de teléfono no es válido");
    } else {
        // Si el número de teléfono es válido, restablecer cualquier mensaje de error personalizado anterior.
        contactPhone.setCustomValidity("");
    }

    // Reportar la validez del campo, lo que puede mostrar el mensaje de error personalizado.
    contactPhone.reportValidity();
}


async function submitForm(event) {
    // Prevenir el envío del formulario.
    event.preventDefault();
    validatePhone();

    const dataContact = new FormData(this);
    const myAlert = new CustomAlert();
    const response = await fetch(this.action, {
        method: this.method,
        body: dataContact,
        headers: {
            "Accept": "application/json"
        }
    })
    if (response.ok) {
        this.reset();
        myAlert.title = "Su mensaje ha sido enviado exitosamente";
        myAlert.message = "¡Gracias por contactarte con nosotros 😀!<br> Pronto nos comunicaremos con usted.";
    } else {
        myAlert.title = "Su mensaje no pudo enviarse";
        myAlert.message = "¡Ups! Hubo un problema al enviar su formulario 😥";
    }
    myAlert.showAlert();
};

const formContact = document.querySelector("#form-contact");

formContact.addEventListener("submit", handleSubmit);
// Establece un listener para el evento "change" en el elemento contactPhone
// y restablece la validez personalizada del campo, lo que permite que el usuario
// corrija y vuelva a validar el campo después de realizar cambios.
contactPhone.addEventListener("change", () => {
    contactPhone.setCustomValidity("");
});


function handleSubmit(event) {
    event.preventDefault();
    // const myAlert = new CustomAlert();
    // myAlert.title = "Su mensaje ha sido enviado exitosamente";
    // myAlert.message = "¡Gracias por contactarte con nosotros 😀!<br> Pronto nos comunicaremos con usted.";
    // myAlert.showAlert();
    alert("hola")
  }


/* 

// Test de funcionamiento de función isValidPhone.
const testPhoneNumbers = [
    "+5492226680056",
    "(+54)902226815680056",
    "02226421577",
    "(2226)15680056",
    "2226680056"
];

for (phone of testPhoneNumbers) {
    console.log(`${phone} es ${isValidPhone(phone)}`);
};

 */