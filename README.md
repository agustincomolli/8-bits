# 8-bits - Trabajo práctico Codo a Codo

Este es el repositorio del proyecto para el desarrollo del sitio web de 8-bits, una empresa especializada en brindar soporte técnico integral en computadoras.

## Productos y Servicios

El sitio web proveerá información detallada acerca de los productos y servicios únicos que ofrece 8-bits. Estos incluyen pero no se limitan a:

1. Soporte técnico y mantenimiento de sistemas.
2. Soluciones de problemas de software y hardware.
3. Configuración de redes y seguridad de datos.
4. Diversos planes de abono flexibles para la manutención continua de nuestros clientes.

Además, la página de contacto proporciona un fácil acceso a los usuarios para enviar consultas. También incluimos la dirección física de la empresa, junto con un mapa interactivo.

## Nuestro público objetivo

Nuestro sitio web está diseñado principalmente para atender a empresas y personas individuales que buscan soporte técnico en computadoras. Es un recurso valioso tanto para quienes necesitan asistencia instantánea con problemas de TI, como para aquellos que buscan una solución a largo plazo para mantener sus sistemas operando sin problemas. Nos esforzamos por proporcionar un servicio de primera calidad que satisface las necesidades de nuestros clientes y supera sus expectativas.

## Mockups

En esta sección, te presentamos algunos mockups de nuestro proyecto para ofrecerte una visión más realista de cómo se verá nuestro sitio web al completarlo. 

<!-- ![Index Mockup](./mockups/8-bits-index.webp) -->
<img src="./mockups/8-bits-index.webp" width="800">

☝🏻 Esta imagen representa cómo se verá la página inicial de 8-bits en una pantalla de escritorio; se puede observar el diseño general, la distribución de los elementos y la elección de los colores.

<!-- ![Phone Mockup](./mockups/8-bits-phone.webp) -->
<img src="./mockups/8-bits-phone.webp" width="800">

☝🏻 Esta muestra cómo será nuestra página vista desde un dispositivo móvil; el diseño responsivo garantiza que el contenido se muestre correctamente en pantallas de diferentes tamaños.

<!-- ![Services Mockup](./mockups/8-bits-services.webp) -->
<img src="./mockups/8-bits-services.webp" width="800">


☝🏻 Por último, este mockup exhibe la página de servicios en donde se detallan las soluciones y trabajos que ofrecemos; una presentación clara y ordenada que facilita al usuario encontrar lo que necesita.

Estas representaciones nos permiten anticipar cómo se verán y se sentirán las diversas funciones y componentes de nuestro sitio, y nos ayudan a realizar ajustes antes de codificar las características en sí.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript (JS)
- Python

## Proceso de Desarrollo

Utilizamos la metodología ágil Scrum para gestionar el desarrollo de este proyecto. Durante el proceso de diseño y planificación, utilizamos Excalidraw para crear bocetos y mockups que nos ayudaron a visualizar y definir la apariencia y la estructura del sitio web.

Para ver los wireframes, detalles de diseño incluyendo paletas de colores y fuentes, te invitamos a visitar nuestro [Detalles de Diseño](./design-details.md).

## Páginas del Sitio

1. **Página Principal**: La página de inicio del sitio web, que presenta una breve descripción de nuestra empresa y sus servicios.

2. **Acerca de...**: En esta sección, los usuarios pueden obtener más información sobre nuestra empresa, su historia y su equipo.

3. **Servicios**: Aquí enumeramos los diversos servicios de soporte técnico que ofrecemos, incluyendo reparación de hardware, solución de problemas de software y más.

4. **Abonos a los Servicios**: Esta página presenta información sobre nuestros planes de abonos y cómo los clientes pueden suscribirse para obtener soporte continuo.

5. **Contacto**: Proporcionamos información de contacto para que los clientes se comuniquen con nosotros, ya sea por correo electrónico, teléfono o a través de un formulario en línea.

## Características Adicionales

- El sitio cuenta con una animación en el logotipo de la página `index.html`.
- Ofrecemos una animación de apertura y cierre del menú hamburguesa en el modo responsive.
- También hemos incluido transiciones al pasar el mouse por los elementos del menú en el modo escritorio.

## Inspiración

El proyecto coge como inspiración primaria la [plantilla de CMS Wix](https://www.wix.com/website-template/view/html/1677) para su diseño. Aunque la estructura, los estilos, las fuentes y los colores reflejan la estética de la plantilla, el sitio fue codificado desde cero e incorpora una serie de funcionalidades únicas.

También se inspiró en los siguientes sitios web:

- [OpenService MX](https://openservice.mx/soporte-tecnico-de-ti/)
- [Soporte ENTI](https://soporteenti.com/)
- [Visión Tecnológica](https://visiontecnologica.com.ar/soporte-tecnico-para-pymes/)
- [IOnet](https://www.ionet.cl/servicios-informaticos)
- [IT Systems](https://it-systems.com.co/soporte-tecnico-ti-corporativo/)
- [Calsistem](https://www.calsistem.com.ar/soporte-tecnico-informatico.php)
- [ITA Tech](https://ita.tech/soporte-tecnico-para-empresas)

## Uso de la API de Geolocalización

Este proyecto utiliza la API de Geolocalización del Gobierno de Argentina para obtener información sobre las provincias y ciudades del país. La API proporciona datos geográficos precisos y actualizados que son fundamentales para la funcionalidad de la aplicación.

### Recursos de la API

- **Provincias**: La API permite obtener una lista de todas las provincias de Argentina.

- **Ciudades**: A partir de una provincia seleccionada, la API proporciona información detallada sobre las ciudades de esa provincia.

### Cómo se integra la API

El código fuente del proyecto incluye funciones que realizan solicitudes HTTP a la API de Geolocalización para obtener datos sobre las provincias y ciudades. Estos datos se utilizan para llenar los selectores de provincias y ciudades en la interfaz de usuario.

### Documentación de la API

Para obtener más información sobre la API de Geolocalización y sus capacidades, consulte la documentación oficial en el siguiente enlace: [Documentación de la API de Geolocalización](https://apis.datos.gob.ar/georef/).

## Instrucciones de Ejecución

Si desea ejecutar este proyecto localmente en su máquina, siga estos pasos:

1. Clone el repositorio a su computadora:

   git clone https://github.com/tu-usuario/nombre-del-repositorio.git


2. Abra el archivo `index.html` en su navegador web para acceder a la página principal.

## Vista Previa

Si desea ver una vista del sitio, se encuentra desplegada en: https://8-bits.up.railway.app/

## Contribuciones

Agradecemos las contribuciones de la comunidad para mejorar este proyecto. Si desea contribuir, asegúrese de seguir las pautas de contribución y enviar solicitudes de extracción.

## Licencia

Este proyecto está bajo la Licencia GNU General Public License v3.0. Consulte el archivo [LICENSE](LICENSE) para obtener más detalles.

¡Gracias por visitar nuestro repositorio!

<img src="./assets/images/logo.webp" height=80px>
