/* function validarCamposUsuarios() {
  var Nombre_de_usuario = document.getElementById('Nombre_de_usuario').value;
  var correo_de_usuario = document.getElementById('correo_de_usuario').value;
  var confirmarPassword = document.getElementById('confirmarPassword').value;

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
        window.location.href = "/usuarios";
      }, 4000);
    }
  });
} */

function validarNombre_de_usuario() {
  var nombre = document.getElementById('nombre').value;
  var mensaje = "";

  if (nombre.trim() === '') {
    mensaje = 'Por favor, ingrese el nombre';
  } else if (!/^[A-Za-z\s]+$/.test(nombre)){
    mensaje = 'El nombre solo debe contener letras y espacios';
  }

  document.getElementById('texto1').innerText = mensaje;
}

function validarCorreo() {
  var correo_de_usuario = document.getElementById('correo_de_usuario').value;
  var mensaje = "";

  if (correo_de_usuario.trim() === '') {
    mensaje = 'Por favor, ingrese el Correo';
  } else if (!/\S+@\S+\.\S+/.test(correo_de_usuario)){
    mensaje = 'El Correo debe tener el siguiente formato: ejemplo@hotmail.com';
  }

  document.getElementById('texto3').innerText = mensaje;
}

function validarCamposUsuarios() {
  var nombre = document.getElementById('nombre').value;
  var correo_de_usuario = document.getElementById('correo_de_usuario').value;
  var password = document.getElementById('password').value;
  var confirmarPassword = document.getElementById('confirmarPassword').value;

  if (
    nombre.trim() === '' ||
      correo_de_usuario.trim() === '' ||
      password.trim() === '' ||
      confirmarPassword.trim() === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
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

  if (!/\S+@\S+\.\S+/.test(correo_de_usuario)) {
    Swal.fire(
      'No se puede registrar',
      'El Correo debe tener el siguiente formato: ejemplo@hotmail.com',
      'error'
    );
    return;
  }

  if (password !== confirmarPassword) {
    Swal.fire(
      'No se puede registrar',
      'Las contraseñas no coinciden',
      'error'
    );
    return;
  }

  Swal.fire('Guardado exitosamente', '', 'success');

  setTimeout(function () {
    window.location.href = '/usuarios';
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
        window.location.href = '/usuarios';
      }, 4000);
    }
  });
}