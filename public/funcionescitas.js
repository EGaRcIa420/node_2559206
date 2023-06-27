function validarNombreApellido() {
  var nombreApellido = document.getElementById('Nombre_y_Apellido').value;
  var mensaje = "";

  if (nombreApellido.trim() === '') {
    mensaje = 'Por favor, ingrese el nombre y apellido';
  } else if (!/^[A-Za-z\s]+$/.test(nombreApellido)) {
    mensaje = 'El nombre y apellido solo deben contener letras y espacios';
  }

  document.getElementById('texto1').innerText = mensaje;
}

function validarTelefono() {
  var telefono = document.getElementById('Telefono').value;
  var mensaje = "";

  if (telefono.trim() === '') {
    mensaje = 'Ingrese el número de teléfono';
  } else if (!/^\d+$/.test(telefono)) {
    mensaje = 'El número de teléfono debe contener solo números';
  } else if (telefono.length < 7 || telefono.length > 10) {
    mensaje = 'El número de teléfono debe tener entre 7 y 10 dígitos';
  }

  document.getElementById('texto2').innerText = mensaje;
}

function validarFecha() {
  var fecha = document.getElementById('Fecha').value;
  var mensaje = "";

  if (fecha.trim() === '') {
    mensaje = 'Por favor, ingrese la fecha';
  } else if (new Date(fecha) < new Date()) {
    mensaje = 'La fecha no puede ser anterior a la fecha actual';
  }

  document.getElementById('texto3').innerText = mensaje;
}

function validarHora() {
  var hora = document.getElementById('Hora').value;
  var mensaje = "";

  if (hora.trim() === '') {
    mensaje = 'Por favor, ingrese la hora';
  } else if (!/^\d{2}:\d{2}$/.test(hora)) {
    mensaje = 'La hora debe tener el formato HH:MM';
  }

  document.getElementById('texto4').innerText = mensaje;
}

function validarRestricciones() {
  var restricciones = document.getElementById('Restrincciones').value;
  var mensaje = "";

  if (restricciones.trim() === '') {
    mensaje = 'Por favor, ingrese las restricciones';
  } else if (!/^[A-Za-z0-9\s]+$/.test(restricciones)) {
    mensaje = 'Las restricciones solo deben contener letras, números y espacios';
  }

  document.getElementById('texto5').innerText = mensaje;
}


function guardarCita() {
  var nombreApellido = document.getElementById('Nombre_y_Apellido').value;
  var telefono = document.getElementById('Telefono').value;
  var fecha = document.getElementById('Fecha').value;
  var hora = document.getElementById('Hora').value;
  var restricciones = document.getElementById('Restrincciones').value;

  if (
    nombreApellido.trim() === '' ||
    telefono.trim() === '' ||
    fecha.trim() === '' ||
    hora.trim() === '' ||
    restricciones.trim() === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }


  Swal.fire('Guardado exitosamente', '', 'success');

  setTimeout(function () {
    window.location.href = '/citas';
  }, 4000);
}

function confirmarEliminacion() {
  Swal.fire({
    title: '¿Estás seguro de que deseas eliminar este elemento?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then(function (result) {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire(
        'Eliminado',
        'La cita ha sido eliminada exitosamente.',
        'success'
      );
    } else {
      Swal.fire('Cancelado', 'La cita no ha sido eliminada.', 'info');
    }
  });
}

function mostrarConfirmacionCancelar() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Si cancelas, se perderán los datos ingresados.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, volver',
  }).then(function (result) {
    if (result.isConfirmed) {
      // Si el usuario confirma la cancelación, redirigirse a la página de citas
      Swal.fire(
        'Cancelado',
        'La inserción de los datos ha sido cancelada exitosamente.',
        'info'
      );
      setTimeout(function () {
        window.location.href = '/citas';
      }, 4000);
    }
  });
}