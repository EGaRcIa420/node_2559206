function validarCamposPaquete() {
  var idPaquete = document.getElementById('id_paquete').value;
  var paquete = document.getElementById('paquete').value;
  var servicios = document.getElementById('servicios').value;
  var cantidad = document.getElementById('cantidad').value;
  var total = document.getElementById('total').value;

  if (idPaquete.trim() === '') {
    alert('Por favor, ingrese un ID de Paquete.');
    return;
  }

  if (isNaN(idPaquete)) {
    alert('El ID de Paquete debe ser un número.');
    return;
  }

  if (paquete.trim() === '') {
    alert('Por favor, ingrese el nombre del paquete.');
    return;
  }

  if (!/^[a-zA-Z]+$/.test(paquete)) {
    alert('El nombre del paquete solo debe contener letras.');
    return;
  }

  if (servicios.trim() === '') {
    alert('Por favor, ingrese los servicios del paquete.');
    return;
  }

  if (!/^[a-zA-Z]+$/.test(servicios)) {
    alert('Los servicios del paquete solo deben contener letras.');
    return;
  }

  if (cantidad.trim() === '') {
    alert('Por favor, ingrese la cantidad.');
    return;
  }

  if (isNaN(cantidad)) {
    alert('La cantidad debe ser un número.');
    return;
  }

  if (cantidad > 8) {
    alert('La cantidad no puede ser mayor a 8.');
    return;
  }

  if (total.trim() === '') {
    alert('Por favor, ingrese el total.');
    return;
  }

  if (isNaN(total)) {
    alert('El total debe ser un número.');
    return;
  }

  window.location.href = "/paquetes";
}
