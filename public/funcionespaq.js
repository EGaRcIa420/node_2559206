function validarPaquete() {
  var paquete = document.getElementById('paquete').value;

  if (paquete.trim() === '') {
    document.getElementById('texto1').innerText = 'Por favor, ingrese el nombre del paquete';
  } else if (!/^[0-9#]+$/.test(paquete)) {
    document.getElementById('texto1').innerText = 'El nombre de paquete solo debe contener números y "#"';
  } else {
    document.getElementById('texto1').innerText = '';
  }
}


function validarServicios() {
  var servicios = document.getElementById('servicios').value;

  if (servicios.trim() === '') {
    document.getElementById('texto2').innerText = 'Por favor, ingrese los servicios';
  } else if (!/^[A-Za-z\s]+$/.test(servicios)) {
    document.getElementById('texto2').innerText =
      'Los servicios solo deben contener letras o espacios';
  } else {
    document.getElementById('texto2').innerText = '';
  }
}
  
function validarFrecuencia() {
  var frecuencia = document.getElementById('frecuencia').value;

  if (frecuencia.trim() === '') {
    document.getElementById('texto3').innerText = 'Por favor, ingrese la frecuencia';
  } else if (!/^[a-zA-Z\s]+$/.test(frecuencia)) {
    document.getElementById('texto3').innerText = 'La frecuencia solo debe contener letras y espacios';
  } else {
    document.getElementById('texto3').innerText = '';
  }
}

  // Validación de la cantidad
  function validarCantidad() {
    var cantidad = document.getElementById('cantidad').value;
  
    if (cantidad.trim() === '') {
      document.getElementById('texto4').innerText = 'Por favor, ingrese la cantidad';
    } else if (!/^\d+$/.test(cantidad)) {
      document.getElementById('texto4').innerText = 'La cantidad debe ser un número entero';
    } else if (cantidad < 1 || cantidad > 365) {
      document.getElementById('texto4').innerText = 'La cantidad debe estar entre 1 y 365';
    } else {
      document.getElementById('texto4').innerText = '';
    }
  }

function validarTotal() {
  var precioventa = document.getElementById('precioventa').value;

  if (precioventa.trim() === '') {
    document.getElementById('texto5').innerText = 'Por favor, ingrese el total';
  } else if (!/^\d+$/.test(total)) {
    document.getElementById('texto5').innerText = 'El total debe ser un número entero';
  } else if (precioventa < 4000 || total > 1000000) {
    document.getElementById('texto5').innerText = 'El total debe estar entre 4000 y 1000000';
  } else {
    document.getElementById('texto5').innerText = '';
  }
}

function validarCamposPaquete() {
  var paquete = document.getElementById('paquete').value;
  var servicios = document.getElementById('servicios').value;
  var frecuencia = document.getElementById('frecuencia').value;
  var cantidad = document.getElementById('cantidad').value;
  var precioventa = document.getElementById('precioventa').value;


  if (
    paquete.trim() === '' ||
    servicios.trim() === '' ||
    frecuencia.trim() === '' ||
    cantidad.trim() === '' ||
    precioventa.trim() === '' ||
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