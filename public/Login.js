function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "THOR" && password === "DDCE") {
    Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      showConfirmButton: false,
      timer: 2500
    }).then(function () {
      window.location.href = "/home";
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
      showConfirmButton: false,
      timer: 2500
    });
  }
}