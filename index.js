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
    // res.write('home')
    // res.end()
    res.render('login')
})

app.get('/home', (req, res)=>{
    // res.write('home')
    // res.end()
    res.render('home')
})

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})