function validarRoles() {
  
  var idusuario = document.getElementById('idusuario').value;
  var nombrerol = document.getElementById('nombrerol').value;
  var permisosrol = document.getElementById('permisosrol').value;
  

  if (
    
    idusuario.trim() === '' ||
    nombrerol.trim() === '' ||
    permisosrol.trim() === ''
    
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  

  if (!/^[0-9]+$/.test(idusuario)) {
    Swal.fire(
      'El id de usuario  solo debe contener números',
      '',
      'error'
    );
    return;
  }

  // Validación de servicios
  if (!/^[a-zA-Z]+$/.test(nombrerol)) {
    Swal.fire(
      'El nombre de rol solo debe contener letras ',
      '',
      'error'
    );
    return;
  }
  if (!/^[a-zA-Z]+$/.test(permisosrol)) {
    Swal.fire(
      'los permisos del rol solo debe contener letras ',
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
    window.location.href = "/roles";
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
      Swal.fire('Eliminado', 'el rol ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'el rol no ha sido eliminado.', 'info');
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
        window.location.href = "/roles";
      }, 4000);
    }
  });
}