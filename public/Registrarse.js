registrarse = () => {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;

  // Validar campos vacíos
  if (
    username.trim() === '' ||
    email.trim() === '' ||
    password === '' ||
    confirmpassword === ''
  ) {
    Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
    return;
  }

  // Validar campo de usuario
var usernameRegex = /^[a-zA-Z0-9\s]+$/;
if (!usernameRegex.test(username)) {
  Swal.fire('Error', 'El nombre de usuario solo puede contener letras, números y espacios.', 'error');
  return;
}

// Validar campo de correo electrónico
var emailRegex = /^\S+@\S+\.\S+$/;
if (!emailRegex.test(email)) {
  Swal.fire('Error', 'Ingrese un correo electrónico válido.', 'error');
  return;
}

// Validar contraseña y confirmación de contraseña
var passwordRegex = /^[a-zA-Z0-9@_\/+\-]+$/;
if (!passwordRegex.test(password)) {
  Swal.fire('Error', 'La contraseña solo puede contener letras, números y los siguientes caracteres especiales: @ _ - / +', 'error');
  return;
}


if (password !== confirmpassword) {
  Swal.fire('Error', 'Las contraseñas no coinciden.', 'error');
  return;
}

  // Si todas las validaciones son exitosas, mostrar mensaje de éxito y redirigir al inicio
  Swal.fire('Éxito', 'La cuenta se ha creado correctamente.', 'success');

  setTimeout(() => {
    window.location.href = '/';
  }, 2000);
};
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
