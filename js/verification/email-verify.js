const confirmButton2 = document.getElementById('confirm');

confirmButton2.addEventListener('click', confirmEmail);

const emailInput = document.querySelectorAll('#fieldset input[type="email"]')[0];

function emailVerify() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
}

function confirmEmail(){
    if(!emailVerify()) {
        alert("Por favor, introduce una direccion de correo electronico valida");
        event.preventDefault();
    }
}