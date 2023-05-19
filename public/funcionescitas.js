function validarCamposCita() {
    var idCita = document.getElementById('id_cita').value;
    var nombreApellido = document.getElementById('Nombre_y_Apellido').value;
    var telefono = document.getElementById('Telefono').value;
    var fecha = document.getElementById('Fecha').value;
    var hora = document.getElementById('Hora').value;
    var restricciones = document.getElementById('Restrincciones').value;

    if (idCita.trim() === '') {
      alert('Por favor, ingrese un ID de Cita.');
      return;
    }

    if (nombreApellido.trim() === '') {
      alert('Por favor, ingrese el nombre y apellido.');
      return;
    }

    if (/\d/.test(nombreApellido)) {
      alert('El nombre y apellido no pueden contener números.');
      return;
    }

    if (telefono.trim() === '') {
      alert('Por favor, ingrese el teléfono.');
      return;
    }

    if (isNaN(telefono)) {
      alert('El teléfono debe ser un número.');
      return;
    }

    if (telefono.length !== 10) {
      alert('El teléfono debe tener 10 dígitos.');
      return;
    }

    if (fecha.trim() === '') {
      alert('Por favor, ingrese una fecha.');
      return;
    }

    var today = new Date().toISOString().split('T')[0];
    if (fecha < today) {
      alert('La fecha no puede ser anterior a la fecha actual.');
      return;
    }

    if (hora.trim() === '') {
        alert('Por favor, ingrese una hora.');
        return;
      }

    if (restricciones.trim() === '') {
      alert('Por favor, ingrese las restricciones.');
      return;
    }

    if (/\d/.test(restricciones)) {
      alert('Las restricciones no pueden contener números.');
      return;
    }

    window.location.href = "/citas";

  }