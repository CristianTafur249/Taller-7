const formulario = document.getElementById('formulario1')
const inputs = document.querySelectorAll('#formulario1 input')

const validarF = (e) => {
    console.log(e.target.name)
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarF)
    input.addEventListener('blur', validarF)
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

})