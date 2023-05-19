function validarRoles() {
    var idRol = document.getElementById('idrol').value;
    var idUsuario = document.getElementById('id_usuario').value;
    var nombreRol = document.getElementById('Nombre_rol').value;
    var permisos = document.getElementById('Permisos').value;
  
    if (idRol.trim() === '') {
      alert('Por favor, ingrese un ID de Rol.');
      return;
    }
  
    if (isNaN(idRol)) {
      alert('El ID de Rol debe ser un número.');
      return;
    }
  
    if (idUsuario.trim() === '') {
      alert('Por favor, ingrese un ID de Usuario.');
      return;
    }
  
    if (isNaN(idUsuario)) {
      alert('El ID de Usuario debe ser un número.');
      return;
    }
  
    if (nombreRol.trim() === '') {
      alert('Por favor, ingrese el nombre del rol.');
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(nombreRol)) {
      alert('El nombre del rol solo puede contener letras y espacios.');
      return;
    }
  
    if (permisos.trim() === '') {
      alert('Por favor, ingrese los permisos.');
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(permisos)) {
      alert('Los permisos solo pueden contener letras y espacios.');
      return;
    }
  
    window.location.href = "/roles";
  }
  