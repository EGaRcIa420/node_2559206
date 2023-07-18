function frecuenciaCardiaca() {
  var frecuenciaCardiaca = document.getElementById('frecuenciacardiaca').value;
  var mensaje = "";

  if (frecuenciaCardiaca.trim() === '') {
    mensaje = 'Por favor, ingrese la frecuencia cardíaca';
  } else if (!/^[0-9.]+$/.test(frecuenciaCardiaca)) {
    mensaje = 'La frecuencia cardíaca solo debe contener números y puntos';
  }

  document.getElementById('texto1').innerText = mensaje;
}

function presionArterial() {
  var presionarterial = document.getElementById('presionarterial').value;
  var mensaje = "";

  if (presionarterial.trim() === '') {
    mensaje = 'Por favor, ingrese la presión arterial';
  } else if (!/^[0-9-]+$/.test(presionarterial)) {
    mensaje = 'La presión arterial solo debe contener números y menos';
  }

  document.getElementById('texto2').innerText = mensaje;
}

function frecuenciaRespiratoria() {
  var frecuenciarespiratoria = document.getElementById('frecuenciarespiratoria').value;
  var mensaje = "";

  if (frecuenciarespiratoria.trim() === '') {
    mensaje = 'Por favor, ingrese la frecuencia respiratoria';
  } else if (!/^[0-9]+$/.test(frecuenciarespiratoria)) {
    mensaje = 'La frecuencia respiratoria solo debe contener números';
  }

  document.getElementById('texto3').innerText = mensaje;
}

function cantoxigenoSangre() {
  var cantoxigenosangre = document.getElementById('cantoxigenosangre').value;
  var mensaje = "";

  if (cantoxigenosangre.trim() === '') {
    mensaje = 'Por favor, ingrese la cant oxigeno sangre';
  } else if (!/^[0-9.]+$/.test(cantoxigenosangre)) {
    mensaje = 'La cant oxigeno sangre solo debe contener números y puntos';
  }

  document.getElementById('texto4').innerText = mensaje;
}


function Altura() {
  var altura = document.getElementById('altura').value;
  var mensaje = "";
  
  if (altura.trim() === '') {
  mensaje = 'Por favor, ingrese la altura';
  } else if (!/^[\d\s.]+(cm)?$/.test(altura)) {
  mensaje = 'La altura solo debe contener números, espacios, puntos y la unidad "cm"';
  }
  
  document.getElementById('texto5').innerText = mensaje;
  }

function Peso() {
  var peso = document.getElementById('peso').value;
  var mensaje = "";
  
  if (peso.trim() === '') {
  mensaje = 'Por favor, ingrese el peso';
  } else if (!/^[\d\s.]+(kg)?$/.test(peso)) {
  mensaje = 'La altura solo debe contener números, espacios, puntos y la unidad "kg"';
  }
  
  document.getElementById('texto6').innerText = mensaje;
  }

    
function Hallazgosanormales() {
  var hallazgosanormales = document.getElementById('hallazgosanormales').value;
  var mensaje = "";
  
  if (hallazgosanormales.trim() === '') {
  mensaje = 'Por favor, ingrese los hallazgos anormales';
  } else if (!/^[0-9a-zA-Z\s]+$/.test(hallazgosanormales)) {
  mensaje = 'Los hallazgos anormales solo deben contener números, espacios y letras';
  }
  
  document.getElementById('texto7').innerText = mensaje;
  }

function Imc() {
  var imc = document.getElementById('imc').value;
  var mensaje = "";

  if (imc.trim() === '') {
    mensaje = 'Por favor, ingrese el imc';
  } else if (!/^[0-9.]+$/.test(imc)) {
    mensaje = 'El imc solo debe contener números y puntos';
  }

  document.getElementById('texto8').innerText = mensaje;
}

function Fecha() {
  var fecha = document.getElementById('fecha').value;
  var mensaje = "";
  var fechaActual = new Date(); // Obtener la fecha actual
  
  if (fecha.trim() === '') {
  mensaje = 'Por favor, ingrese la fecha';
  } else {
  var fechaSeleccionada = new Date(fecha);
  if (fechaSeleccionada < fechaActual) {
    mensaje = 'La fecha no puede ser anterior a la fecha actual';
  }

  document.getElementById('texto9').innerText = mensaje;
}
}

function validarPliegueBiciptal() {
  var pliegueBiciptal = document.getElementById('plieguebiciptal').value;
  var mensaje = "";

  if (pliegueBiciptal.trim() === '') {
    mensaje = 'Por favor, ingrese el pliegue biciptal';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(pliegueBiciptal)) {
    mensaje = 'El pliegue biciptal solo debe contener números y puntos';
  }

  document.getElementById('texto10').innerText = mensaje;
}

function validarPliegueFreciptal() {
  var pliegueFreciptal = document.getElementById('plieguefreciptal').value;
  var mensaje = "";

  if (pliegueFreciptal.trim() === '') {
    mensaje = 'Por favor, ingrese el pliegue freciptal';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(pliegueFreciptal)) {
    mensaje = 'El pliegue freciptal solo debe contener números y puntos';
  }

  document.getElementById('texto11').innerText = mensaje;
}

function validarPliegueEscapular() {
  var pliegueEscapular = document.getElementById('pliegueescapular').value;
  var mensaje = "";

  if (pliegueEscapular.trim() === '') {
    mensaje = 'Por favor, ingrese el pliegue escapular';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(pliegueEscapular)) {
    mensaje = 'El pliegue escapular solo debe contener números y puntos';
  }

  document.getElementById('texto12').innerText = mensaje;
}

function validarHombroIzquierdo() {
  var hombroIzquierdo = document.getElementById('hombroizquierdo').value;
  var mensaje = "";

  if (hombroIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el hombro izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(hombroIzquierdo)) {
    mensaje = 'El hombro izquierdo solo debe contener números y puntos';
  }

  document.getElementById('texto13').innerText = mensaje;
}

function validarHombroDerecho() {
  var hombroDerecho = document.getElementById('hombroderecho').value;
  var mensaje = "";

  if (hombroDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el hombro derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(hombroDerecho)) {
    mensaje = 'El hombro derecho solo debe contener números y puntos';
  }

  document.getElementById('texto14').innerText = mensaje;
}


function validarPecho() {
  var pecho = document.getElementById('pecho').value;
  var mensaje = "";

  if (pecho.trim() === '') {
    mensaje = 'Por favor, ingrese el pecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(pecho)) {
    mensaje = 'El pecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto15').innerText = mensaje;
}

function validarBicepsDerecho() {
  var bicepsDerecho = document.getElementById('bicepsderecho').value;
  var mensaje = "";

  if (bicepsDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el bíceps derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(bicepsDerecho)) {
    mensaje = 'El bíceps derecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto16').innerText = mensaje;
}

function validarBicepsIzquierdo() {
  var bicepsIzquierdo = document.getElementById('bicepsizquierdo').value;
  var mensaje = "";

  if (bicepsIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el bíceps izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(bicepsIzquierdo)) {
    mensaje = 'El bíceps izquierdo solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto17').innerText = mensaje;
}

function validarAntebrazoIzquierdo() {
  var antebrazoIzquierdo = document.getElementById('antebrazoizquierdo').value;
  var mensaje = "";

  if (antebrazoIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el antebrazo izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(antebrazoIzquierdo)) {
    mensaje = 'El antebrazo izquierdo solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto18').innerText = mensaje;
}

function validarAntebrazoDerecho() {
  var antebrazoDerecho = document.getElementById('antebrazoderecho').value;
  var mensaje = "";

  if (antebrazoDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el antebrazo derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(antebrazoDerecho)) {
    mensaje = 'El antebrazo derecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto19').innerText = mensaje;
}

function validarMuñecaIzquierda() {
  var muñecaIzquierda = document.getElementById('muñecaizquierda').value;
  var mensaje = "";

  if (muñecaIzquierda.trim() === '') {
    mensaje = 'Por favor, ingrese la muñeca izquierda';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(muñecaIzquierda)) {
    mensaje = 'La muñeca izquierda solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto20').innerText = mensaje;
}

function validarMuñecaDerecha() {
  var muñecaDerecha = document.getElementById('muñecaderecha').value;
  var mensaje = "";

  if (muñecaDerecha.trim() === '') {
    mensaje = 'Por favor, ingrese la muñeca derecha';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(muñecaDerecha)) {
    mensaje = 'La muñeca derecha solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto21').innerText = mensaje;
}

function validarAbdomen() {
  var abdomen = document.getElementById('abdomen').value;
  var mensaje = "";

  if (abdomen.trim() === '') {
    mensaje = 'Por favor, ingrese el abdomen';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(abdomen)) {
    mensaje = 'El abdomen solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto22').innerText = mensaje;
}

function validarCintura() {
  var cintura = document.getElementById('cintura').value;
  var mensaje = "";

  if (cintura.trim() === '') {
    mensaje = 'Por favor, ingrese la cintura';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(cintura)) {
    mensaje = 'La cintura solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto23').innerText = mensaje;
}

function validarCadera() {
  var cadera = document.getElementById('cadera').value;
  var mensaje = "";

  if (cadera.trim() === '') {
    mensaje = 'Por favor, ingrese la cadera';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(cadera)) {
    mensaje = 'La cadera solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto24').innerText = mensaje;
}


function validarMusloDerecho() {
  var musloDerecho = document.getElementById('musloderecho').value;
  var mensaje = "";

  if (musloDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el muslo derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(musloDerecho)) {
    mensaje = 'El muslo derecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto25').innerText = mensaje;
}

function validarMusloIzquierdo() {
  var musloIzquierdo = document.getElementById('musloizquierdo').value;
  var mensaje = "";

  if (musloIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el muslo izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(musloIzquierdo)) {
    mensaje = 'El muslo izquierdo solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto26').innerText = mensaje;
}

function validarRodillaDerecha() {
  var rodillaDerecha = document.getElementById('rodilladerecha').value;
  var mensaje = "";

  if (rodillaDerecha.trim() === '') {
    mensaje = 'Por favor, ingrese la rodilla derecha';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(rodillaDerecha)) {
    mensaje = 'La rodilla derecha solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto27').innerText = mensaje;
}

function validarRodillaIzquierda() {
  var rodillaIzquierda = document.getElementById('rodillaizquierda').value;
  var mensaje = "";

  if (rodillaIzquierda.trim() === '') {
    mensaje = 'Por favor, ingrese la rodilla izquierda';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(rodillaIzquierda)) {
    mensaje = 'La rodilla izquierda solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto28').innerText = mensaje;
}

function validarGastromenioDerecho() {
  var gastromenioDerecho = document.getElementById('gastromenioderecho').value;
  var mensaje = "";

  if (gastromenioDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el gastromenio derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(gastromenioDerecho)) {
    mensaje = 'El gastromenio derecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto29').innerText = mensaje;
}

function validarGastromenioIzquierdo() {
  var gastromenioIzquierdo = document.getElementById('gastromenioizquierdo').value;
  var mensaje = "";

  if (gastromenioIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el gastromenio izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(gastromenioIzquierdo)) {
    mensaje = 'El gastromenio izquierdo solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto30').innerText = mensaje;
}

function validarTobilloDerecho() {
  var tobilloDerecho = document.getElementById('tobilloderecho').value;
  var mensaje = "";

  if (tobilloDerecho.trim() === '') {
    mensaje = 'Por favor, ingrese el tobillo derecho';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(tobilloDerecho)) {
    mensaje = 'El tobillo derecho solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto31').innerText = mensaje;
}

function validarTobilloIzquierdo() {
  var tobilloIzquierdo = document.getElementById('tobilloizquierdo').value;
  var mensaje = "";

  if (tobilloIzquierdo.trim() === '') {
    mensaje = 'Por favor, ingrese el tobillo izquierdo';
  } else if (!/^[0-9.]+\s*(cm)?$/.test(tobilloIzquierdo)) {
    mensaje = 'El tobillo izquierdo solo debe contener números, puntos y la unidad "cm"';
  }

  document.getElementById('texto32').innerText = mensaje;
}

function validarTallaPantalon() {
  var tallaPantalon = document.getElementById('tallapantalon').value;
  var mensaje = "";

  if (tallaPantalon.trim() === '') {
    mensaje = 'Por favor, ingrese la talla del pantalón';
  } else if (!/^[a-zA-Z0-9]{1,3}$/.test(tallaPantalon)) {
    mensaje = 'La talla del pantalón debe contener máximo 3 caracteres alfanuméricos';
  }

  document.getElementById('texto33').innerText = mensaje;
}


function guardarValoracion() {
  var frecuenciaCardiaca = document.getElementById('frecuenciacardiaca').value;
  var presionarterial = document.getElementById('presionarterial').value;
  var frecuenciarespiratoria = document.getElementById('frecuenciarespiratoria').value;
  var cantoxigenosangre = document.getElementById('cantoxigenosangre').value;
  var altura = document.getElementById('altura').value;
  var peso = document.getElementById('peso').value;
  var hallazgosanormales = document.getElementById('hallazgosanormales').value;
  var imc = document.getElementById('imc').value;
  var fecha = document.getElementById('fecha').value;
  var pliegueBiciptal = document.getElementById('plieguebiciptal').value;
  var pliegueFreciptal = document.getElementById('plieguefreciptal').value;
  var pliegueEscapular = document.getElementById('pliegueescapular').value;
  var hombroIzquierdo = document.getElementById('hombroizquierdo').value;
  var hombroDerecho = document.getElementById('hombroderecho').value;
  var pecho = document.getElementById('pecho').value;
  var bicepsDerecho = document.getElementById('bicepsderecho').value;
  var bicepsIzquierdo = document.getElementById('bicepsizquierdo').value;
  var antebrazoIzquierdo = document.getElementById('antebrazoizquierdo').value;
  var antebrazoDerecho = document.getElementById('antebrazoderecho').value;
  var muñecaIzquierda = document.getElementById('muñecaizquierda').value;
  var muñecaDerecha = document.getElementById('muñecaderecha').value;
  var abdomen = document.getElementById('abdomen').value;
  var cintura = document.getElementById('cintura').value;
  var cadera = document.getElementById('cadera').value;
  var musloDerecho = document.getElementById('musloderecho').value;
  var musloIzquierdo = document.getElementById('musloizquierdo').value;
  var rodillaDerecha = document.getElementById('rodilladerecha').value;
  var rodillaIzquierda = document.getElementById('rodillaizquierda').value;
  var gastromenioDerecho = document.getElementById('gastromenioderecho').value;
  var gastromenioIzquierdo = document.getElementById('gastromenioizquierdo').value;
  var tobilloDerecho = document.getElementById('tobilloderecho').value;
  var tobilloIzquierdo = document.getElementById('tobilloizquierdo').value;
  var tallaPantalon = document.getElementById('tallapantalon').value;

  if (
    frecuenciaCardiaca.trim() === '' ||
    presionarterial.trim() === '' ||
    frecuenciarespiratoria.trim() === '' ||
    cantoxigenosangre.trim() === '' ||
    altura.trim() === '' ||
    peso.trim() === '' ||
    hallazgosanormales.trim() === '' ||
    imc.trim() === '' ||
    fecha.trim() === '' ||
    pliegueBiciptal.trim() === '' ||
    pliegueFreciptal.trim() === '' ||
    pliegueEscapular.trim() === '' ||
    hombroIzquierdo.trim() === '' ||
    hombroDerecho.trim() === '' ||
    pecho.trim() === '' ||
    bicepsDerecho.trim() === '' ||
    bicepsIzquierdo.trim() === '' ||
    antebrazoIzquierdo.trim() === '' ||
    antebrazoDerecho.trim() === '' ||
    muñecaIzquierda.trim() === '' ||
    muñecaDerecha.trim() === '' ||
    abdomen.trim() === '' ||
    cintura.trim() === '' ||
    cadera.trim() === '' ||
    musloDerecho.trim() === '' ||
    musloIzquierdo.trim() === '' ||
    rodillaDerecha.trim() === '' ||
    rodillaIzquierda.trim() === '' ||
    gastromenioDerecho.trim() === '' ||
    gastromenioIzquierdo.trim() === '' ||
    tobilloDerecho.trim() === '' ||
    tobilloIzquierdo.trim() === '' ||
    tallaPantalon.trim() === ''
  ) {
    Swal.fire(
      'Por favor, complete todos los campos',
      '',
      'error'
    );
    return;
  }

  Swal.fire('Guardado exitosamente', '', 'success');

  setTimeout(function () {
    window.location.href = '/valoracion';
  }, 4000);
}


function anularValoracion() {
    Swal.fire({
      title: '¿Estás seguro de que deseas anular esta valoración?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, anular',
      cancelButtonText: 'Cancelar',
    }).then(function (result) {
      if (result.isConfirmed) {
        // Aquí puedes realizar la lógica para eliminar el elemento
        Swal.fire(
          'Anulado',
          'La valoración ha sido anulada exitosamente.',
          'success'
        );
      } else {
        Swal.fire('Cancelado', 'La valoración no ha sido anulada.', 'info');
      }
    });
  }

  function mostrarConfirmacionCancelar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Si cancelas, se perderán los datos ingresados.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, volver',
    }).then(function (result) {
      if (result.isConfirmed) {
        // Si el usuario confirma la cancelación, redirigirse a la página de citas
        Swal.fire(
          'Cancelado',
          'La inserción de los datos ha sido cancelada exitosamente.',
          'info'
        );
        setTimeout(function () {
          window.location.href = '/valoracion';
        }, 4000);
      }
    });
  }