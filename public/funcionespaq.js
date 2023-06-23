function validarCamposPaquete() {
  var idPaquete = document.getElementById('id_paquete').value;
  var paquete = document.getElementById('paquete').value;
  var servicios = document.getElementById('servicios').value;
  var cantidad = document.getElementById('cantidad').value;
  var total = document.getElementById('total').value;

  if (
    idPaquete === '' ||
    paquete.trim() === '' ||
    servicios.trim() === '' ||
    cantidad.trim() === '' ||
    total.trim() === '' ||
    estado === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  // Validación de paquetes
  if (!/^[0-9]+$/.test(idPaquete)) {
    Swal.fire(
      'El idPaquete de servicio solo debe contener números',
      '',
      'error'
    );
    return;
  }

  if (!/^[A-Za-z0-9]+$/.test(paquete)) {
    Swal.fire(
      'El nombre de paquete solo debe contener letras y números',
      '',
      'error'
    );
    return;
  }

  if (!/^[A-Za-z0-9,\s]+$/.test(servicios)) {
    Swal.fire(
      'Los servicios solo deben contener letras, números, comas o espacios',
      '',
      'error'
    );
    return;
  }
  
 

  // Validación de la cantidad
  if (!/^\d+$/.test(cantidad)) {
    Swal.fire(
      'La cantidad debe ser un número entero',
      '',
      'error'
    );
    return;
  }

  // Validación del rango de la cantidad
  if (cantidad < 1 || cantidad > 8) {
    Swal.fire(
      'La cantidad debe estar entre 1 y 8',
      '',
      'error'
    );
    return;
  }

  // Validación del total
  if (!/^\d+$/.test(total)) {
    Swal.fire(
      'El total debe ser un número entero',
      '',
      'error'
    );
    return;
  }

  // Validación del rango del total
  if (total < 4000 || total > 1000000) {
    Swal.fire(
      'El total debe estar entre 4000 y 1000000',
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
    window.location.href = "/paquetes";
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
      // Si el usuario confirma la cancelación, redirigirss a la página de calendario
      Swal.fire('Cancelado', 'La inserción de los datos ha sido cancelado exitosamente.', 'info')
      setTimeout(() => {
        window.location.href = "/citas";
      }, 4000);
    }
  });
}