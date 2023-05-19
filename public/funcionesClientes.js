
const validateForm = () => {
    const validateNombreResult = validateNombre();
    const validateCedulaResult = validateCedula();
    const validateCorreoResult = validateCorreo();
    const validateDireccionResult = validateDireccion();
    const validateTelefonoResult = validateTelefono();
  
      console.log("validate nombre " , validateNombre);
  
      if (validateNombreResult && validateCedulaResult && validateCorreoResult && validateDireccionResult && validateTelefonoResult) {
        window.location.href = "/clientes";
      }
    }
  const validateNombre = () => {
      let nombre = document.getElementById('nombre').value;
      let texto;
      let expresion = /[a-zA-Z]/;
    
      if (nombre === null || nombre === '' || nombre.length === 0) {
       
        texto = '<span">El nombre no puede estar vacio</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else if (nombre.length < 3) {
        
        texto = '<span>El nombre debe tener mas de dos caracteres</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else if (!expresion.test(nombre)) {
        
        texto = '<span>El nombre solo puede contener letras</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else {
        
        document.getElementById('texto').innerHTML = '';
        return true;
  
      }
     
    }; 
  
    const validateCorreo = () => {
      let correo = document.getElementById('correo').value.trim();
      let texto;
      let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (!correo) {
        
          texto = '<span>El correo no puede estar vacio</span>';
          document.getElementById('texto3').innerHTML = texto;
          return false;
      } else if (!expresion.test(correo)) {
          texto = '<span>La dirección de correo debe ser válida</span>';
          document.getElementById('texto3').innerHTML = texto;
          return false;
      }else {
        document.getElementById('texto3').innerHTML = '';
        return true;
  
      }
  
    
  };
  
  const validateDireccion = () => {
      let direccion = document.getElementById('direccion').value.trim();
      let texto;
      let expresion = /^[a-zA-Z0-9\s'#,-]*$/;
    
      if (!direccion) {
          texto = '<span>La dirección no puede estar vacia</span>';
          document.getElementById('texto4').innerHTML = texto;
          return false;
      } else if (direccion.length < 5) {
          texto = '<span>La dirección debe tener mas de 4 caracteres</span>';
          document.getElementById('texto4').innerHTML = texto;
          return false;
      } else if (!expresion.test(direccion)) {
          texto = '<span>Ingrese una dirección válida.</span>';
          document.getElementById('texto4').innerHTML = texto;
          return false;
      }else{
        document.getElementById('texto4').innerHTML = '';
        return true;
  
      }
      
      
  };
  
  const validateTelefono = () => {
      let telefono = document.getElementById('telefono').value.trim();
      let texto;
      let expresion = /^[0-9]+$/;
    
      if (!telefono) {
          texto = '<span >El telefono no puede estar vacio</span>';
          document.getElementById('texto5').innerHTML = texto;
          return false;
      } else if (telefono.length < 10) {
          texto = '<span >El numero debe tener mas de 9 digitos</span>';
          document.getElementById('texto5').innerHTML = texto;
          return false;
      } else if (!expresion.test(telefono)) {
          texto = '<span>Solo se admiten números</span>';
          document.getElementById('texto5').innerHTML = texto;
          return false;
      }else{
        document.getElementById('texto5').innerHTML = '';
        return true;
      }
     
     
  };
  
    const validateCedula = () => {
      let cedula = document.getElementById('cedula').value;
      let texto;
      let expresion = /[0-9]/;
    
      if (cedula === null || cedula === '' || cedula.length === 0) {
        texto = '<span>La cédula no puede estar vacia</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else if (!expresion.test(cedula)) {
        texto = '<span >Ingrese solo caracteres válidos (números)</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else if (cedula.length < 3) {
        texto = '<span >Debe ser mayor a 3 caracteres</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else if (cedula.length > 10) {
        texto = '<span>Debe ser menor a 10 caracteres</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      
      }else{
        document.getElementById('texto2').innerHTML = '';
        return true;
      }
      
     
      
    };
    
    exports.validateForm = validateForm;