const confirmButton3 = document.getElementById('confirm');

confirmButton3.addEventListener('click', verifyPassword);

const passwordInput = document.querySelectorAll('#fieldset input[type="password"]')[0];

function verifyPassword() {
    const password = passwordInput.value;

    if(isNumericSequence(password)) {
        alert("Detectada secuenciacion de numeros, porfavor introduzca una contraseña mas fuerte");
        event.preventDefault();
        return;
    }

    let points = 0;

    if(password.length >= 8) {
        points++
    }

    if(/[A-Z]/.test(password)) {
        points++
    }

    if(/\d/.test(password)) {
        points++
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        points++
    }

    if (points < 2) {
        alert("Es una contraseña debil, debe ser minimo moderada, para ello prueba con letras mayusculas, simbolos y digitos, tambien ayuda que sea mayor o igual a 8 caracteres");
        event.preventDefault();
    }
}

function isNumericSequence(password) {
    for (let i = 0; i < password.length - 1; i++) {
        const numActual = parseInt(password[i]);
        const numSiguiente = parseInt(password[i + 1]);

        if (numSiguiente - numActual !== 1) {
            return false;
        }
    }
    return true;
}