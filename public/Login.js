function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Emmanuel" && password === "Garcia") {
      alert("Inicio sesion exitoso");
      window.location.href = "/home";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
    