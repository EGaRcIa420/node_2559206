cerrar = () => {
    Swal.fire({
      title: '¿Estás seguro de salir?',
      text: 'Si estás seguro, serás redirigido al inicio de sesión.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Cerraste sesión exitósamente',
          showConfirmButton: false,
          timer: 2500
        }).then(function () {
          window.location.href = "/";
        }); 
      }
    });
  };
  

const boton = document.querySelector('#botoncerrar')
boton.addEventListener('click',cerrar)
    
