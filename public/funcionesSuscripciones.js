function validarCamposSuscripciones() {
    var Id_suscripcion = document.getElementById('Id_suscripcion').value;
    var Id_servicios = document.getElementById('Id_servicios').value;
    var Regularidad = document.getElementById('Regularidad').value;
    var fecha_inicio= document.getElementById('fecha_inicio').value;
   
   

    if (Id_suscripcion.trim() === '') {
      alert('Por favor, ingrese un ID de suscripcion.');
      return;
    }

    if (Id_servicios.trim() === '') {
        alert('Por favor, ingrese un ID de servicios.');
        return;
      }
  

    if (/\d/.test(Regularidad)) 
      alert('la regularidad no pueden contener números.');
      return;
    }

   

   


    if (fecha_inicio.trim() === '') {
      alert('Por favor, ingrese una fecha de inicio.');
      return;
    }

    var today = new Date().toISOString().split('T')[0];
    if (fecha < today) {
      alert('La fecha de inicio no puede ser anterior a la fecha actual.');
      return;
    }

    window.location.href = "/suscripciones";

  