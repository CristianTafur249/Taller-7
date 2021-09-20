const formulario = document.getElementById('formulario1')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const password = document.getElementById('contraseña')
const password2 = document.getElementById('Confirmar')
const names = document.getElementById('nombre')
const lastName = document.getElementById('apellido')
const birth = document.getElementById('nacimiento')
const  tell = document.getElementById('telefono')

/* const validarF = (e) => {
    switch (e.target.name){
        case "usuario":
        if(){
            setErrorPor(e.target.name, 'No puede dejar el espacio em blanco')
        }
        break
        case "nombres":
        break
        case "apellido":
        break
        case "Fecha":
        break
        case "email":
        break
        case "telefono":
        break
        case "contraseña":
        break
        case "Confirmar":
        break
    }
}



inputs.forEach((input)=>{
    input.addEventListener('keyup', validarF)
    input.addEventListener('blur', validarF)
}) */
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs();
})
function checkInputs(){
    const userVal = usuario.value.trim()
    const emailVal = email.value.trim()
    const passVal = password.value.trim()
    const passVal2 = password2.value.trim()
    const nameVal = names.value.trim()
    const lastNameVal = lastName.value.trim()
    const birthVal = birth.value.trim()
    const tellVal = tell.value.trim()

    if(userVal == ''){
        setErrorPor(usuario, 'No puede dejar el usuario en blanco')
    } else if(!isuser(userVal)) {
        setErrorPor(usuario, 'El usuario solo puede incluir letras y/o nuemeros, entre 4 y 16 caracteres')
    }else{
        setSuccesspor(usuario)
    }
    if(emailVal == ''){
        setErrorPor(email, 'No puede dejar este expacio en blanco')
    }else if(isEmail(emailVal)){
        setErrorPor(email, 'No es un email valido')
    }else{
        setSuccesspor(email)
    }
    if(passVal == ''){
        setErrorPor(password, 'No se puede dejar este espacio en blanco')
    }else {
        setSuccesspor(password)
    }
    if(passVal2 == ''){
        setErrorPor(password2, 'No se puede dejar este espacio en blanco')
    }else if(passVal2 != passVal){
        setErrorPor(password2, 'Las contraseñas no coinciden')
    }else{
        setSuccesspor(password2)
    }
}
function setSuccesspor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
function setErrorPor(input,mensage){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = mensage
}
function isuser(user) {
    return /^[a-zA-Z0-9\_\-]{4,16}$/.test(user)
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}