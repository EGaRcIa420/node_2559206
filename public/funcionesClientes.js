function validarCamposClientes() {
  var Nombre_de_cliente = document.getElementById('Nombre_de_cliente').value;
  var Telefono = document.getElementById('Telefono').value;
  var Fecha = document.getElementById('Fecha').value;
  var correo = document.getElementById('correo').value;
  var Restrincciones = document.getElementById('Restrincciones').value;
  var estado = document.getElementById('estado').value;

  if (Nombre_de_cliente === '') {
    Swal.fire('El campo "Nombre de cliente" no puede estar vacío', '', 'error');
    return;
  }

  if (Telefono === '') {
    Swal.fire('El campo "Telefono" no puede estar vacío', '', 'error');
    return;
  }

  if (Fecha === '') {
    Swal.fire('El campo "Fecha" no puede estar vacío', '', 'error');
    return;
  }

  if (correo === '') {
    Swal.fire('El campo "correo" no puede estar vacío', '', 'error');
    return;
  }

  if (Restrincciones === '') {
    Swal.fire('El campo "Restrincciones" no puede estar vacío', '', 'error');
    return;
  }

  if (estado === '') {
    Swal.fire('El campo "estado" no puede estar vacío', '', 'error');
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(Nombre_de_cliente)) {
    Swal.fire('El nombre solo debe contener letras', '', 'error');
    return;
  }

  if (!/^\d+$/.test(Telefono)) {
    Swal.fire('El teléfono solo debe contener números', '', 'error');
    return;
  }

  // Aquí puedes agregar más validaciones según tus necesidades

  Swal.fire('Guardado exitosamente', '', 'success');

  window.location.href = '/clientes';
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
      Swal.fire('Eliminado', 'El cliente ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El cliente no ha sido eliminado.', 'info');
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