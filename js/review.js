let checkUserLogged = sessionStorage.getItem('loggedUser');

if (checkUserLogged) {
    var formulario = document.getElementById('selector_textA_boton');
    formulario.style.display = 'block';
}