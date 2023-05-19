function validarCamposroles() {
    var idrol = document.getElementById('id_rol').value;
    var id_usuario = document.getElementById('id_usuario').value;
    var Nombre_rol = document.getElementById('Nombre_rol').value;
    var Permisos_rol = document.getElementById('Permisos_rol').value;
    

    if (idrol.trim() === '') {
      alert('Por favor, ingrese un id de rol.');
      return;
    }

    if (id_usuario.trim() === '') {
      alert('Por favor ingrese id usuario.');
      return;
    }

    if (/\d/.test(Nombre_rol)) {
      alert('El nombre del rol no pueden contener números.');
      return;
    }

    if (Permisos_rol.trim() === '') {
      alert('Por favor, ingrese los permisos del rol.');
      return;
    }

    

    if (/\d/.test(Permisos_rol)) {
        alert('los permisos del rol no pueden contener números.');
        return;
      }

   

  
  

 
    window.location.href = "/roles";

  }