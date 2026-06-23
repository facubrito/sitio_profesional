// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el formulario
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(event) {
        // Prevenir el envío por defecto que recarga la página
        event.preventDefault();

        // Capturar los valores de los inputs
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validación sencilla (HTML5 ya hace parte con el atributo 'required', pero reforzamos con JS)
        if (nombre === '' || email === '' || mensaje === '') {
            formStatus.textContent = 'Por favor, completa todos los campos obligatorios.';
            formStatus.style.color = 'red';
            return;
        }

        // Validación de formato de email usando Expresiones Regulares
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = 'Por favor, ingresa un correo electrónico válido.';
            formStatus.style.color = 'red';
            return;
        }

        // Si todo está correcto, simulamos el envío exitoso
        formStatus.textContent = `¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto pronto.`;
        formStatus.style.color = 'green';

        // Opcional: Limpiar el formulario
        contactForm.reset();
    });
});
