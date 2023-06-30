/* function validarCamposClientes() {
  var cedula = document.getElementById('cedula').value;
  var Nombre_de_cliente = document.getElementById('Nombre_de_cliente').value;
  var Telefono = document.getElementById('Telefono').value;
  var Fecha = document.getElementById('Fecha').value;
  var correo = document.getElementById('correo').value;
  var Restrincciones = document.getElementById('Restrincciones').value;
  var estado = document.getElementById('estado').value;

  if (cedula === '') {
    Swal.fire ('El campo "Cedula" no puede estar vacío', '', 'error');
    return;
  }

  if (Nombre_de_cliente === '') {
    Swal.fire('El campo "Nombre de cliente" no puede estar vacío', '', 'error');
    return;
  }

  if (Telefono === '') {
    Swal.fire('El campo "Telefono" no puede estar vacío', '', 'error');
    return;
  }

  if (Fecha === '') {
    Swal.fire('El campo "Fecha de inicio" no puede estar vacío', '', 'error');
    return;
  }

  if (correo === '') {
    Swal.fire('El campo "correo" no puede estar vacío', '', 'error');
    return;
  }

  if (Restrincciones === '') {
    Swal.fire('El campo "Restrincciones" no puede estar vacío', '', 'error');
    return;
  }

  if (estado === '') {
    Swal.fire('El campo "estado" no puede estar vacío', '', 'error');
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(Nombre_de_cliente)) {
    Swal.fire('El nombre solo debe contener letras', '', 'error');
    return;
  }

  if (!/^\d+$/.test(Telefono)) {
    Swal.fire('El teléfono solo debe contener números', '', 'error');
    return;
  }
  if (!/^\d+$/.test(cedula)) {
    Swal.fire('la cedula solo debe contener números', '', 'error');
    return;
  }
  // Aquí puedes agregar más validaciones según tus necesidades

  Swal.fire('Guardado exitosamente', '', 'success');

  window.location.href = '/clientes';
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
      Swal.fire('Eliminado', 'El cliente ha sido eliminado exitosamente.', 'success');
    } else {
      Swal.fire('Cancelado', 'El cliente no ha sido eliminado.', 'info');
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
        window.location.href = "/clientes";
      }, 4000);
    }
  });
} */

function validarcedula() {
  var cedula = document.getElementById('cedula').value;
  var mensaje = "";

  if (cedula.trim() === '') {
    mensaje = 'Por favor, ingrese la cedula';
  } else if (!/^\d+$/.test(cedula)){
    mensaje = 'La cedula solo debe contener números y espacios';
  }

  document.getElementById('texto1').innerText = mensaje;
}

function validarNombre_de_cliente() {
  var Nombre_de_cliente = document.getElementById('Nombre_de_cliente').value;
  var mensaje = "";

  if (Nombre_de_cliente.trim() === '') {
    mensaje = 'Por favor, ingrese el nombre';
  } else if (!/^[A-Za-z\s]+$/.test(Nombre_de_cliente)){
    mensaje = 'El nombre solo debe contener letras y espacios';
  }

  document.getElementById('texto2').innerText = mensaje;
}

function validarTelefono() {
  var Telefono = document.getElementById('Telefono').value;
  var mensaje = "";

  if (Telefono.trim() === '') {
    mensaje = 'Por favor, ingrese el Telefono';
  } else if (!/^\d+$/.test(Telefono)){
    mensaje = 'El Telefono solo debe contener números y espacios';
  }

  document.getElementById('texto3').innerText = mensaje;
}

/* function validarCamposClientes() {
  // ...
  var fecha = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato ISO


  // Resto del código...
} */


function validarCorreo() {
  var Correo = document.getElementById('Correo').value;
  var mensaje = "";

  if (Correo.trim() === '') {
    mensaje = 'Por favor, ingrese el Correo';
  } else if (!/\S+@\S+\.\S+/.test(Correo)){
    mensaje = 'El Correo debe tener el siguiente formato: ejemplo@hotmail.com';
  }

  document.getElementById('texto5').innerText = mensaje;
}

function validarRestricciones() {
  var Restricciones = document.getElementById('Restricciones').value;
  var mensaje = "";

  if (Restricciones.trim() === '') {
    mensaje = 'Por favor, ingrese las restricciones';
  }

  document.getElementById('texto6').innerText = mensaje;
}


function validarCamposClientes() {
  var cedula = document.getElementById('cedula').value;
  var Nombre_de_cliente = document.getElementById('Nombre_de_cliente').value;
  var Telefono = document.getElementById('Telefono').value;
  var Correo = document.getElementById('Correo').value;
  var Restricciones = document.getElementById('Restricciones').value;


  if (
      cedula.trim() === '' ||
      Nombre_de_cliente.trim() === '' ||
      Telefono.trim() === '' ||
      Correo.trim() === '' ||
      Restricciones.trim() === ''

  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  if (!/^\d+$/.test(cedula)) {
    Swal.fire(
      'No se puede registrar',
      'La cedula solo debe contener números y espacios',
      'error'
    );
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(Nombre_de_cliente)) {
    Swal.fire(
      'No se puede registrar',
      'El nombre solo debe contener letras y espacios',
      'error'
    );
    return;
  }

  if (!/^\d+$/.test(Telefono)) {
    Swal.fire(
      'No se puede registrar',
      'El Telefono solo debe contener números y espacios',
      'error'
    );
    return;
  }

  if (!/\S+@\S+\.\S+/.test(Correo)) {
    Swal.fire(
      'No se puede registrar',
      'El Correo debe tener el siguiente formato: ejemplo@hotmail.com',
      'error'
    );
    return;
  }
  if (Restricciones.trim() === '') {
    Swal.fire(
      'No se puede registrar',
      'No puede estar vacio',
      'error'
    );
    return;
  }


  Swal.fire('Guardado exitosamente', '', 'success');

  setTimeout(function () {
    window.location.href = '/clientes';
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
      Swal.fire('Cancelado', 'El cliente no ha sido eliminado.', 'info');
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
        window.location.href = '/clientes';
      }, 4000);
    }
  });
}