const formulario = document.getElementById('formulario')

const usuarioDB = 'migue'
const passwordDB = '1234'

function mostrarError(tipo){
    let errorHTML = document.getElementById(`error${tipo}`)
    errorHTML.classList.remove('hide')
    errorHTML.classList.add('error')
    setTimeout(()=>{
        errorHTML.classList.remove('error')
        errorHTML.classList.add('hide')
    }, 4000) 
}

const boton = document.getElementById('limpiar').addEventListener('click', ()=>{
    document.getElementById('usuario').value = ""
    document.getElementById('password').value = ""
})


function validarDatos(user, pass){
    if(user === usuarioDB && pass === passwordDB){
        console.log('Bienvenido');
    } 
    else if (user !== usuarioDB){
        console.log('Usuario incorrecto')
        mostrarError('usuario')
    }
    else if (pass !== passwordDB){
        console.log('Password incorrecto');
        mostrarError('password')
    }
    else{
        console.log('intenta nuevamente');
    }
}

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let ususario = document.getElementById('usuario').value
    let paswword = document.getElementById('password').value
    validarDatos(usuario, password)
})