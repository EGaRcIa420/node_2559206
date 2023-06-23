function validarCamposUsuarios() {
  var id_usuario = document.getElementById('id_usuario').value;
  var Nombre_de_usuario = document.getElementById('Nombre_de_usuario').value;
  var correo_de_usuario = document.getElementById('correo_de_usuario').value;
  var confirmarPassword = document.getElementById('confirmarPassword').value;

  if (id_usuario === '') {
    Swal.fire('El campo "id usuario" no puede estar vacío', '', 'error');
    return;
  }

  if (Nombre_de_usuario === '') {
    Swal.fire('El campo "Nombre de usuario" no puede estar vacío', '', 'error');
    return;
  }

  if (correo_de_usuario === '') {
    Swal.fire('El campo "correo de usuario" no puede estar vacío', '', 'error');
    return;
  }

  if (confirmarPassword === '') {
    Swal.fire('El campo "confirmar de contraseña" no puede estar vacío', '', 'error');
    return;
  }

  if (!/^\d+$/.test(id_usuario)) {
    Swal.fire('El ID solo debe contener números', '', 'error');
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(Nombre_de_usuario)) {
    Swal.fire('El nombre de usuario solo debe contener letras y espacios', '', 'error');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(correo_de_usuario)) {
    Swal.fire('El correo electrónico no tiene un formato válido', '', 'error');
    return;
  }

  if (confirmarPassword !== document.getElementById('password').value) {
    Swal.fire('Las contraseñas no coinciden', '', 'error');
    return;
  }

  Swal.fire('Guardado exitosamente', '', 'success');
  window.location.href = '/usuarios';
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
      Swal.fire('Eliminado', 'El usuario ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El usuario no ha sido eliminado.', 'info');
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