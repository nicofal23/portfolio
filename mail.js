const contactForm = document.querySelector('#contact_form');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const message = document.querySelector('#message');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = {
        service_id: 'service_a39bl8f',
        template_id: 'template_fe28b3a',
        user_id: 'O4mvOOZbR9fx_QTde',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message': message.value,
        }
    };

    try {
        const response = await sendEmail(body);
        console.log(response);
        if (response && response.includes('OK')) {
            // Mostrar SweetAlert de éxito
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'El correo electrónico se ha enviado correctamente.',
            });

            // Limpiar los campos del formulario
            userName.value = '';
            userEmail.value = '';
            message.value = '';
        } else {
            // Mostrar SweetAlert de error si la respuesta no contiene 'OK'
            showErrorAlert();
        }
    } catch (error) {
        // Mostrar SweetAlert de error si hay un error en la solicitud
        showErrorAlert();
    }
});

const showErrorAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
    });
};

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
    const data = await response.text(); // Obtener la respuesta como texto
    return data;
};