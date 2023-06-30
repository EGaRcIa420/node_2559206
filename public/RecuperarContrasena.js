enviarRecuperacion = () => {
  var email = document.getElementById('email').value;

  if (email === '') {
    Swal.fire(
      'Por favor, complete el campo',
      '',
      'error'
    );
    return;
  }
  
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    Swal.fire('Error', 'Ingrese un correo electrónico válido.', 'error');
    return;
  }
  
  Swal.fire('Éxito', 'Se ha enviado un correo electrónico de recuperación de contraseña.', 'success')
    .then(() => {
      window.location.href = "/";
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
        window.location.href = "/";
      }, 2000);
    }
  });
} 