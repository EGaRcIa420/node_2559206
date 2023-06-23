function validarCampos() {
  var servicios = document.getElementById('servicios').value;
  var clases = document.getElementById('clases').value;
  var precio = document.getElementById('precio').value;

  if (
    servicios.trim() === '' ||
    clases.trim() === '' ||
    precio.trim() === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  if (!/^[0-9]+$/.test(idServicio)) {
    Swal.fire(
      'El idServicio de servicio solo debe contener números',
      '',
      'error'
    );
    return;
  }

  // Validación de servicios
  if (!/^[A-Za-z0-9\s]+$/.test(servicios)) {
    Swal.fire(
      'El nombre de servicio solo debe contener letras y números',
      '',
      'error'
    );
    return;
  }

  // Validación del precio
  if (!/^\d+$/.test(precio)) {
    Swal.fire(
      'El precio debe ser un número entero',
      '',
      'error'
    );
    return;
  }

  // Validación del rango del precio
  if (precio < 6000 || precio > 1000000) {
    Swal.fire(
      'El precio debe estar entre 6000 y 1000000',
      '',
      'error'
    );
    return;
  }

  Swal.fire(
    'Guardado exitosamente',
    '',
    'success'
  );

  setTimeout(() => {
    window.location.href = "/servicios";
  }, 4000);
  
}

function confirmarEliminacion(){
  Swal.fire({
    title: '¿Estás seguro de que deseas eliminar este elemento?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire('Eliminado', 'La cita ha sido eliminada exitosamente.', 'success');
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
    cancelButtonText: 'No, volver'
  }).then((result) => {
    if (result.isConfirmed) {

      Swal.fire('Cancelado', 'La inserción de los datos ha sido cancelado exitosamente.', 'info')
      setTimeout(() => {
        window.location.href = "/servicios";
      }, 4000);
    }
  });
}