const formulario = document.getElementById('formulario1')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const password = document.getElementById('contraseña')
const password2 = document.getElementById('Confirmar')
const names = document.getElementById('nombre')
const lastName = document.getElementById('apellido')
const birth = document.getElementById('nacimiento')
const  tell = document.getElementById('telefono')
const depar = document.getElementById('departamento')
const ciud = document.getElementById('ciudad')

function traerDatos(){
    const xhttp= new XMLHttpRequest()
    xhttp.open('GET','https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json',true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            let datos = JSON.parse(this.responseText)
            /* console.log(datos) */
            
            for(let item of datos){
                depar.innerHTML += `<option value="${item.departamento}">${item.departamento}</option>`

            } 
        }
    }
}
depar.addEventListener('click', traerDatos())

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
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
    }else if(passVal== userVal){
        setErrorPor(password, 'El usuario y la contraseña deben ser diferentes')
    }else {
        setSuccesspor(password)
    }
    if(passVal2 == ''){
        setErrorPor(password2, 'No se puede dejar este espacio en blanco')
    }else if(passVal2 != passVal){
        setErrorPor(password2, 'Las contraseñas no coinciden')
    }else if(passVal2== userVal){
        setErrorPor(password, 'El usuario y la contraseña deben ser diferentes')
    }else{
        setSuccesspor(password2)
    }
    if(nameVal==''){
        setErrorPor(names, 'No puede dejar este espacio en blanco')
    }else {
        setSuccesspor(names)
    }
    if(lastNameVal==''){
        setErrorPor(lastName, 'No puede dejar este espacio en blanco')
    }else {
        setSuccesspor(lastName)
    }
    if(tellVal==''){
        setErrorPor(tell, 'No puede dejar este espacio en blanco')
    }else if(!isTell(tellVal)){
        setErrorPor(tell, 'el numero de telefono no es valido')
    } else{
        setSuccesspor(tell)
    }
    if(calcularEdad(birthVal)<18){
        setErrorPor(birth, 'Debes ser mayor de edad para registrarte' )
    }else if(calcularEdad(birthVal)>=100){
        setErrorPor(birth, 'Debes tener menos de 100 años')
    }else if(birthVal==''){
        setErrorPor(birth, 'Dbe selecionar su fecha de nacimiento')
    }else{
        setSuccesspor(birth)
    }
    if (depar.value == 'null'){
        setErrorPor(depar, 'Debe selecionar un departamento' )
    }else{
        setSuccesspor(depar)
    }
    if (ciud.value == 'null'){
        setErrorPor(ciud, 'Debe selecionar una Ciudad' )
    }else{
        setSuccesspor(ciud)
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
function isTell (tell){
    return /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/.test(tell)
}
function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

$("#departamento").change(function() {
    $("#ciudades").empty();
    $.getJSON('http://localhost/getPoblacionesJson.php?pr='+$("#provincias").val(),function(data){
        console.log(JSON.stringify(data));
        $.each(data, function(k,v){
            $("#poblaciones").append("<option value=\""+k+"\">"+v+"</option>");
        }).removeAttr("disabled");
    });
});