let loggedUser = sessionStorage.getItem('loggedUser');

if (loggedUser === null) {
    loggedUser = false;
} else {
    loggedUser = loggedUser === 'true';
}

const navLink = document.getElementsByClassName('header__nav2')[0];

if (loggedUser) {
    navLink.innerHTML = `<li class="header__li--nav2"><a href="date_managment.html" class="header__a--nav2">Nombre de usuario</a></li>`;
} else {
    navLink.innerHTML = `
        <li class="header__li--nav2"><a href="login.html" class="header__a--nav2">Iniciar sesión</a></li>
        <li class="header__li--nav2"><a href="register.html" class="header__a--nav2">Registrarse</a></li>`;
    const form = document.getElementById('form');
    if(form){
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            register();
        });
    }
}
function register() {
    loggedUser = true;
    sessionStorage.setItem('loggedUser', 'true');
    window.location.href = "homepage.html";
}
