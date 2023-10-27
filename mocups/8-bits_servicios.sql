-- Crear la base de datos
CREATE DATABASE servicios;

-- Usar la base de datos
USE servicios;

-- Crear la tabla para almacenar la información de los servicios
CREATE TABLE servicios_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    servicio_nombre VARCHAR(255) NOT NULL,
    servicio_descripcion TEXT
);

-- Insertar datos en la tabla
INSERT INTO servicios_info (servicio_nombre, servicio_descripcion) VALUES
('Diagnóstico y Resolución de Fallas', 'Nuestros expertos identificarán y resolverán de manera eficiente cualquier problema en tu equipo, manteniendo tus sistemas en pleno funcionamiento.'),
('Instalación de Sistemas Operativos', 'Deja que 8-bits se encargue de la instalación de sistemas operativos, asegurando que todo esté configurado y listo para funcionar sin problemas.'),
('Eliminación de Malware', 'Mantén tu sistema libre de amenazas con nuestra eliminación de virus y spyware, protegiendo tus datos y tu privacidad.'),
('Actualización de Sistema', 'Mantén tu software actualizado y seguro con nuestras actualizaciones de sistema regulares, garantizando un rendimiento óptimo.'),
('Limpieza Física de los Equipos', 'Una limpieza física regular ayuda a prolongar la vida útil de tus equipos y a mantenerlos funcionando sin problemas.'),
('Instalación de Hardware', 'Añade o reemplaza componentes de hardware con confianza, gracias a nuestros servicios de instalación de hardware.'),
('Instalación y Configuración de Software', 'Desde software empresarial hasta programas personalizados, te asistimos en la instalación y configuración para satisfacer tus necesidades específicas.'),
('Networking', 'Mantén una conectividad sin interrupciones con nuestros servicios de chequeo, instalación y reparación de cableado de red y datos.'),
('Instalación y Reparación de Sistemas Operativos', 'Ya sea Windows, Mac o Linux, nuestros expertos pueden instalar y reparar sistemas operativos para garantizar un rendimiento óptimo.'),
('Configuración y Mantenimiento de Servidores', 'Asegura un flujo constante de datos y servicios con nuestra configuración y mantenimiento de servidores experto.'),
('Instalación de Antivirus y Programas de Seguridad', 'Protege tus sistemas con nuestra experiencia en la instalación, actualización y mantenimiento de antivirus y programas de seguridad.'),
('Gestión de Redes y Sistemas', 'Mantén tus redes y sistemas bajo control con nuestra gestión experta, garantizando una operación sin problemas.'),
('Reparación de Computadoras y Notebooks', 'Solucionamos problemas de hardware y software en tus computadoras y notebooks, devolviéndote equipos en perfectas condiciones de funcionamiento.'),
('Backups de los Datos de tu Empresa', 'Protege tus datos cruciales con nuestros servicios de copia de seguridad, asegurando que nunca se pierda información valiosa.'),
('Asesoramiento y Consultoría', 'Obtén orientación experta en tecnología y toma decisiones informadas para tu empresa con nuestro servicio de asesoramiento y consultoría.'),
('Asesoramiento en Software Legal y Licenciamiento', 'Cumple con las regulaciones y adquiere el software legal necesario con nuestra orientación en software legal y licenciamiento.'),
('Soporte Remoto', 'Obtén asistencia inmediata sin importar tu ubicación con nuestro soporte remoto a través de RustDesk, AnyDesk o Team Viewer. Nuestros expertos están a un clic de distancia.');
