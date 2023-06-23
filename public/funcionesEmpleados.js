function validarCamposEmpleados() {
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
    Swal.fire('El campo "Hoja_de_vida" no puede estar vacío', '', 'error');
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
}