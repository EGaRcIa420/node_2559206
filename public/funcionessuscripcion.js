function validarsuscripciones() {
  
  var nombresuscripcion = document.getElementById('nombresuscripcion').value;
  var fecha_inicio = document.getElementById('fecha_inicio').value;
  var fecha_fin = document.getElementById('fecha_fin').value;
  var nombrecliente = document.getElementById('nombrecliente').value;
  var monto = document.getElementById('monto').value
 
  
  if (
  
    nombresuscripcion.trim() === '' ||
    fecha_inicio.trim()===''||
    fecha_fin.trim()===''
    
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  if (!/^[a-zA-Z]+$/.test(nombresuscripcion)) {
    Swal.fire(
      'El nombre de la suscripcion solo debe contener letras ',
      '',
      'error'
    );
    return;
  }

 


  if(fecha_inicio> fecha_fin){
    Swal.fire(
      'la fecha de inicio no puede ser mayor que la fecha final ',
      '',
      'error'
    );
    return;
  }

  if (!/^[0-9]+$/.test(monto)) {
    Swal.fire(
      'El monto  solo debe contener números',
      '',
      'error'
    );
    return;
  }

 

  
  if (!/^[a-zA-Z]+$/.test(nombrecliente)) {
    Swal.fire(
      'El nombre de cliente solo debe contener letras ',
      '',
      'error'
    );
    return;
  }
  // Validación de servicios
  
  if(fecha_inicio> fecha_fin){
    Swal.fire(
      'la fecha de inicio no puede ser mayor que la fecha final ',
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
    window.location.href = "/suscripciones";
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
      Swal.fire('Eliminado', 'la suscripcion ha sido eliminada exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'la suscripcion no ha sido eliminada.', 'info');
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
        window.location.href = "/suscripciones";
      }, 4000);
    }
  });
}