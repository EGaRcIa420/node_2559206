cerrar=()=>{
    alert('Si estas seguro de salir dale "Aceptar"')
    window.location.href = '/'
}

const boton = document.querySelector('#botoncerrar')
boton.addEventListener('click',cerrar)
    
