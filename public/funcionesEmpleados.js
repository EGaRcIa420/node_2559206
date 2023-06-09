/* function validarCamposEmpleados() {
  var cedula = document.getElementById('cedula').value;
  var Nombre_de_empleado = document.getElementById('Nombre_de_empleado').value;
  var Telefono = document.getElementById('Telefono').value;
  var Correo = document.getElementById('Correo').value;
  var Hoja_de_vida = document.getElementById('Hoja_de_vida').value;

  if (cedula === '') {
    Swal.fire('El campo "cedula" no puede estar vacío', '', 'error');
    return;
  }

  if (Nombre_de_empleado === '') {
    Swal.fire('El campo "Nombre de empleado" no puede estar vacío', '', 'error');
    return;
  }

  if (Telefono === '') {
    Swal.fire('El campo "Telefono" no puede estar vacío', '', 'error');
    return;
  }

  if (Correo === '') {
    Swal.fire('El campo "Correo" no puede estar vacío', '', 'error');
    return;
  }

  if (Hoja_de_vida === '') {
    Swal.fire('El campo "Hoja de vida" no puede estar vacío', '', 'error');
    return;
  }

  Swal.fire('Guardado exitosamente', '', 'success');
  window.location.href = '/empleados';
}

function confirmarEliminacion() {
  Swal.fire({
    title: '¿Estás seguro de que deseas eliminar este elemento?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire('Eliminado', 'El empleado ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El empleado no ha sido eliminado.', 'info');
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
    cancelButtonText: 'No, volver'
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario confirma la cancelación, redirigirss a la página de calendario
      Swal.fire('Cancelado', 'La inserción de los datos ha sido cancelado exitosamente.', 'info')
      setTimeout(() => {
        window.location.href = "/empleados";
      }, 4000);
    }
  });
}  */
function validarcedula() {
  var cedula = document.getElementById('cedula').value;
  var mensaje = "";

  if (cedula.trim() === '') {
    mensaje = 'Por favor, ingrese la cedula';
  } else if (!/^\d+$/.test(cedula)){
    mensaje = 'La cedula solo debe contener números y espacios';
  }

  document.getElementById('texto1').innerText = mensaje;
}

function validarNombre_de_empleado() {
  var nombre = document.getElementById('Nombre_de_empleado').value;
  var mensaje = "";

  if (nombre.trim() === '') {
    mensaje = 'Por favor, ingrese el nombre';
  } else if (!/^[A-Za-z\s]+$/.test(nombre)){
    mensaje = 'El nombre solo debe contener letras y espacios';
  }

  document.getElementById('texto2').innerText = mensaje;
}

function validarTelefono() {
  var telefono = document.getElementById('Telefono').value;
  var mensaje = "";

  if (telefono.trim() === '') {
    mensaje = 'Por favor, ingrese el Telefono';
  } else if (!/^\d+$/.test(telefono)){
    mensaje = 'El Telefono solo debe contener números y espacios';
  }

  document.getElementById('texto3').innerText = mensaje;
}

function validarCorreo() {
  var correo = document.getElementById('Correo').value;
  var mensaje = "";

  if (correo.trim() === '') {
    mensaje = 'Por favor, ingrese el Correo';
  } else if (!/\S+@\S+\.\S+/.test(correo)){
    mensaje = 'El Correo debe tener el siguiente formato: ejemplo@hotmail.com';
  }

  document.getElementById('texto4').innerText = mensaje;
}

function validarCamposEmpleados() {
  var cedula = document.getElementById('cedula').value;
  var nombre = document.getElementById('Nombre_de_empleado').value;
  var telefono = document.getElementById('Telefono').value;
  var correo = document.getElementById('Correo').value;
  var hojaDeVida = document.getElementById('Hoja_de_vida').files[0];


  if (
      cedula.trim() === '' ||
      nombre.trim() === '' ||
      telefono.trim() === '' ||
      correo.trim() === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  if (!/^\d+$/.test(cedula)) {
    Swal.fire(
      'No se puede registrar',
      'La cedula solo debe contener números y espacios',
      'error'
    );
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(nombre)) {
    Swal.fire(
      'No se puede registrar',
      'El nombre solo debe contener letras y espacios',
      'error'
    );
    return;
  }

  if (!/^\d+$/.test(telefono)) {
    Swal.fire(
      'No se puede registrar',
      'El Telefono solo debe contener números y espacios',
      'error'
    );
    return;
  }

  if (!/\S+@\S+\.\S+/.test(correo)) {
    Swal.fire(
      'No se puede registrar',
      'El Correo debe tener el siguiente formato: ejemplo@hotmail.com',
      'error'
    );
    return;
  }
  if (!hojaDeVida) {
    Swal.fire('El campo "Hoja de vida" no puede estar vacío', '', 'error');
    return;
  }

  Swal.fire('Guardado exitosamente', '', 'success');

  setTimeout(function () {
    window.location.href = '/empleados';
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
        'El empleado ha sido eliminado exitosamente.',
        'success'
      );
    } else {
      Swal.fire('Cancelado', 'El empleado no ha sido eliminado.', 'info');
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
      // Si el usuario confirma la cancelación, redirigirse a la página de empleados
      Swal.fire(
        'Cancelado',
        'La inserción de los datos ha sido cancelada exitosamente.',
        'info'
      );
      setTimeout(function () {
        window.location.href = '/empleados';
      }, 4000);
    }
  });
}
