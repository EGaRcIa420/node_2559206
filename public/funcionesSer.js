function validarCampos() {
  var idPaquete = document.getElementById('id_paquete').value;
  var servicios = document.getElementById('servicios').value;
  var clases = document.getElementById('clases').value;
  var precio = document.getElementById('precio').value;

  if (idPaquete.trim() === '') {
    alert('Por favor, ingrese un ID de Servicios.');
    return;
  }

  if (isNaN(idPaquete)) {
    alert('El ID de Servicios debe ser un número.');
    return;
  }

  if (servicios.trim() === '') {
    alert('Por favor, ingrese el nombre del servicio.');
    return;
  }

  if (!/^[a-zA-Z]+$/.test(servicios)) {
    alert('El nombre del servicio solo debe contener letras.');
    return;
  }

  if (clases.trim() === '') {
    alert('Por favor, ingrese el tipo de clase.');
    return;
  }

  if (!/^[a-zA-Z]+$/.test(clases)) {
    alert('El tipo de clase solo debe contener letras.');
    return;
  }

  if (precio.trim() === '') {
    alert('Por favor, ingrese un precio.');
    return;
  }

  if (isNaN(precio)) {
    alert('El precio debe ser un número.');
    return;
  }

  window.location.href = "/servicios";
}
