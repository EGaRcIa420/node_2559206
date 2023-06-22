function validarCamposCita() {
    var idCita = document.getElementById('id_cita').value;
    var nombreApellido = document.getElementById('Nombre_y_Apellido').value;
    var telefono = document.getElementById('Telefono').value;
    var fecha = document.getElementById('Fecha').value;
    var hora = document.getElementById('Hora').value;
    var restricciones = document.getElementById('Restrincciones').value;

    if (
      idCita.trim() === '' ||
      nombreApellido.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      restricciones.trim() === '' ||
      estado.trim() === ''
    ) {
      Swal.fire(
        'Por favor, complete todos los campos',
        '',
        'error'
      );
      return;
    }
    if (!/^\d+$/.test(idCita)) {
      Swal.fire(
        'El id solo debe contener números',
        '',
        'error'
      );
      return;
    }

    
  
    // Validación del nombre y apellido
    if (!/^[A-Za-z\s]+$/.test(nombreApellido)) {
      Swal.fire(
        'El nombre y apellido solo deben contener letras y espacios',
        '',
        'error'
      );
      return;
    }
  
    // Validación del teléfono
    if (!/^\d+$/.test(telefono)) {
      Swal.fire(
        'El teléfono solo debe contener números',
        '',
        'error'
      );
      return;
    }
  
    // Validación de la longitud del teléfono
    if (telefono.length < 7 || telefono.length > 10) {
      Swal.fire(
        'El teléfono debe tener entre 7 y 10 caracteres',
        '',
        'error'
      );
      return;
    }
  
    // Validación de la fecha
    if (new Date(fecha) < new Date()) {
      Swal.fire(
        'La fecha no puede ser anterior a la fecha actual',
        '',
        'error'
      );
      return;
    }
  
    // Validación de la hora
    if (!/^\d{2}:\d{2}$/.test(hora)) {
      Swal.fire(
        'La hora debe tener el formato HH:MM',
        '',
        'error'
      );
      return;
    }
  
    // Validación de las restricciones
    if (!/^[A-Za-z0-9\s]+$/.test(restricciones)) {
      Swal.fire(
        'Las restricciones solo deben contener letras, números y espacios',
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

    window.location.href = "/citas";
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