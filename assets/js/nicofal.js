
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}



document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact_form');
  const botonEnviar = document.getElementById('botonEnviar');

  botonEnviar.addEventListener('click', async (event) => {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;

      const body = {
          service_id: 'service_a39bl8f',
          template_id: 'template_fe28b3a',
          user_id: 'O4mvOOZbR9fx_QTde',
          template_params: {
              'to_name': nombre,
              'from_name': email,
              'message': mensaje,
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
              }).then((result) => {
                  // Refrescar la página cuando el usuario hace clic en 'OK'
                  if (result.isConfirmed) {
                      location.reload();
                  }
              });
              // Limpiar los campos del formulario
              document.getElementById('nombre').value = '';
              document.getElementById('email').value = '';
              document.getElementById('mensaje').value = '';
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
});