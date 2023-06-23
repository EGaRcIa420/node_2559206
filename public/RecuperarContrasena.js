enviarRecuperacion = () => {
    var email = document.getElementById('email').value;

    if (
        email === '' 
      ) {
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
    Swal.fire('Éxito', 'Se ha enviado un correo electrónico de recuperación de contraseña.', 'success');
}

volverInicio = () => {
    Swal.fire({
        icon: 'success',
        title: 'Ahora Inicia Sesion',
        showConfirmButton: false,
        timer: 2500
      }).then(function () {
        window.location.href = "/";
      });
}