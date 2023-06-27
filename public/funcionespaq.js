function validarPaquete() {
  var paquete = document.getElementById('paquete').value;

  if (paquete.trim() === '') {
    document.getElementById('texto1').innerText = 'Por favor, ingrese el nombre del paquete';
  } else if (!/^[A-Za-z0-9]+$/.test(paquete)) {
    document.getElementById('texto1').innerText =
      'El nombre de paquete solo debe contener letras y números';
  } else {
    document.getElementById('texto1').innerText = '';
  }
}

function validarServicios() {
  var servicios = document.getElementById('servicios').value;

  if (servicios.trim() === '') {
    document.getElementById('texto2').innerText = 'Por favor, ingrese los servicios';
  } else if (!/^[A-Za-z0-9,\s]+$/.test(servicios)) {
    document.getElementById('texto2').innerText =
      'Los servicios solo deben contener letras, números, comas o espacios';
  } else {
    document.getElementById('texto2').innerText = '';
  }
}
  
 

  // Validación de la cantidad
  function validarCantidad() {
    var cantidad = document.getElementById('cantidad').value;
  
    if (cantidad.trim() === '') {
      document.getElementById('texto3').innerText = 'Por favor, ingrese la cantidad';
    } else if (!/^\d+$/.test(cantidad)) {
      document.getElementById('texto3').innerText = 'La cantidad debe ser un número entero';
    } else if (cantidad < 1 || cantidad > 8) {
      document.getElementById('texto3').innerText = 'La cantidad debe estar entre 1 y 8';
    } else {
      document.getElementById('texto3').innerText = '';
    }
  }

function validarTotal() {
  var total = document.getElementById('total').value;

  if (total.trim() === '') {
    document.getElementById('texto4').innerText = 'Por favor, ingrese el total';
  } else if (!/^\d+$/.test(total)) {
    document.getElementById('texto4').innerText = 'El total debe ser un número entero';
  } else if (total < 4000 || total > 1000000) {
    document.getElementById('texto4').innerText = 'El total debe estar entre 4000 y 1000000';
  } else {
    document.getElementById('texto4').innerText = '';
  }
}

function validarCamposPaquete() {
  var paquete = document.getElementById('paquete').value;
  var servicios = document.getElementById('servicios').value;
  var cantidad = document.getElementById('cantidad').value;
  var total = document.getElementById('total').value;

  if (
    paquete.trim() === '' ||
    servicios.trim() === '' ||
    cantidad.trim() === '' ||
    total.trim() === '' ||
    estado === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
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
    window.location.href = "/paquetes";
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
      Swal.fire('Eliminado', 'El paquete ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El paquete no ha sido eliminado.', 'info');
    }
  });
}

function confirmarEliminacionSer(){
  Swal.fire({
    title: '¿Estás seguro de que deseas eliminar este elemento?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire('Eliminado', 'El servicio ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El servicio no ha sido eliminado.', 'info');
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
        window.location.href = "/paquetes";
      }, 4000);
    }
  });
}

function cantidad(){
  Swal.fire({
    title: '¿Estás seguro de que deseas agregar esta cantidad?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, agregar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire('Agregado', 'La cantidad ha sido agregada exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'La cantidad no ha sido agregada.', 'info');
    }
  });
}

function cantidadact(){
  Swal.fire({
    title: '¿Estás seguro de que deseas actualizar esta cantidad?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, agregar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes realizar la lógica para eliminar el elemento
      Swal.fire('Agregado', 'La cantidad ha sido actualizada exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'La cantidad no ha sido actualizada.', 'info');
    }
  });
}