function validarsuscripciones() {
  
    var periosidad = document.getElementById('periosidad').value;
    var fechacompra = document.getElementById('fechacompra').value;
    var fechapago = document.getElementById('fechapago').value;
    var monto = document.getElementById('monto').value
   
    
    if (
    
      periosidad.trim() === '' ||
      monto.trim()===''||
      fechacompra.trim()===''||
      fechapago.trim()===''
      
    ) {
      Swal.fire(
        'Por favor, complete todos los campos',
        '',
        'error'
      );
      return;
    }
  
    if (!/^[a-zA-Z]+$/.test(periosidad)) {
      Swal.fire(
        'la periosidad solo debe contener letras ',
        '',
        'error'
      );
      return;
    }

  
    if(fechapago > fechacompra){
      Swal.fire(
        'la fecha de pago no puede ser mayor que la fecha de compra',
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
  