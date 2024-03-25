const confirmButton = document.getElementById('confirm');

confirmButton.addEventListener('click', confirmName);

const usernameInput = document.querySelectorAll('#fieldset input[type="text"]')[0];
function verifyName() {
    const username = usernameInput.value;

    if(username.length < 4 || username.length > 15 || !(/^[a-z]/.test(username))) {
        return false;
    }
    return true;
}
function confirmName() {
    if(!verifyName()){
        alert("Nombre de usuario invalido, debe tener entre 4 a 15 caracteres y debe empezar por una letra");
        event.preventDefault();
    }
}

