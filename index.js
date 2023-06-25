const express = require('express')

const app = express()
const path= require('path')
const hbs = require('hbs')

const puerto= 8484

// Servidor de contenido estatico
app.use(express.static('public'))

// Configuracion del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

// configuracion del directorio que guardara los archivos parciales hbs
hbs.registerPartials(__dirname+'/public/views/partials');

app.get('/', (req, res)=>{
    res.render('login')
})

app.get('/home', (req, res)=>{
    res.render('home')
})

app.get('/Dasboard', (req, res)=>{
    res.render('Dasboard')
})

app.get('/paquetes', (req, res)=>{
    res.render('paquetes')
})

app.get('/citas', (req, res)=>{
    res.render('citas')
})

app.get('/servicios', (req, res)=>{
    res.render('servicios')
})

app.get('/calendario', (req, res)=>{
  res.render('calendario')
})

app.get('/programacion', (req, res)=>{
  res.render('programacion')
})

app.get('/clientes', (req, res)=>{
    res.render('clientes')
})

app.get('/empleados', (req, res)=>{
    res.render('empleados')
})

app.get('/roles', (req, res)=>{
    res.render('roles')
})

app.get('/suscripciones', (req, res)=>{
    res.render('suscripciones')
})

app.get('/registrarClientes', (req, res)=>{
    res.render('registrarClientes')
})

app.get('/registrarRoles', (req, res)=>{
    res.render('registrarRoles')
})

app.get('/registrarsuscripciones', (req, res)=>{
    res.render('registrarsuscripciones')
})

app.get('/registrarEmpleados', (req, res)=>{
    res.render('registrarEmpleados')
})

app.get('/registrarpaquete', (req, res)=>{
    res.render('registrarpaquete')
})

app.get('/registrarservicios', (req, res)=>{
    res.render('registrarservicios')
})

app.get('/registrarcitas', (req, res)=>{
    res.render('registrarcitas')
})

app.get('/registrarprogramacion', (req, res)=>{
  res.render('registrarprogramacion')
})

app.get('/registraragenda', (req, res)=>{
  res.render('registraragenda')
})

app.get('/editarcita', (req, res)=>{
    res.render('editarcita')
  })

app.get('/editarservicios', (req, res)=>{
    res.render('editarservicios')
})

app.get('/usuarios',(req,res)=>{
    res.render('usuarios')
})

app.get('/editarpaquetes', (req, res)=>{
    res.render('editarpaquetes')
})

app.get('/registrarse', (req, res)=>{
    res.render('registrarse')
})

app.get('/recuperarcontra', (req, res)=>{
    res.render('recuperarcontra')
})

app.get('/editarUsuario', (req, res)=>{
    res.render('editarUsuario')
})

app.get('/registrarUsuarios', (req, res)=>{
    res.render('registrarUsuarios')
})

app.get('/editarCliente', (req, res)=>{
   res.render('editarCliente')
})

app.get('/editarEmpleado', (req, res)=>{
   res.render('editarEmpleado')
})

app.get('/editarRoles', (req, res)=>{
    res.render('editarRoles')
})

app.get('/editarsuscripcion', (req, res)=>{
    res.render('editarsuscripcion')
})
app.get('/editaragenda', (req, res)=>{
    res.render('editaragenda')
})
app.get('/editarprogramacion', (req, res)=>{
    res.render('editarprogramacion')
})

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})




  