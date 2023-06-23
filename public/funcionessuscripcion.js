function validarsuscripcion() {
    var idServicios = document.getElementById('Id_servicios').value;
    var regularidad = document.getElementById('Regularidad').value;
    var fechaInicio = document.getElementById('fecha_inicio').value;
    var fechaFin = document.getElementById('fecha_fin').value;

    if (idServicios.trim() === '') {
      alert('Por favor, ingrese un ID de servicios.');
      return;
    }
  
    if (isNaN(idServicios)) {
      alert('El ID de servicios debe ser un número.');
      return;
    }
  
    if (regularidad.trim() === '') {
      alert('Por favor, ingrese la regularidad.');
      return;
    }
  
    if (!/^[a-zA-Z]+$/.test(regularidad)) {
      alert('La regularidad solo puede contener letras.');
      return;
    }
  
    if (fechaInicio.trim() === '' || fechaFin.trim() === '') {
      alert('Por favor, ingrese la fecha de inicio y la fecha de fin.');
      return;
    }
  
    if (fechaInicio >= fechaFin) {
      alert('La fecha de inicio debe ser menor que la fecha de fin.');
      return;
    }
  
    window.location.href = "/suscripciones";
  }
  