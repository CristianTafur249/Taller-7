const formulario = document.getElementById('formulario1')
const inputs = document.querySelectorAll('#formulario1 input')

const expre = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/
}

const validarF = (e) => {
    switch (e.target.name){
        case "usuario":
        if(expre.usuario.test(e.target.value)){

        } else{
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto')
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
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

})