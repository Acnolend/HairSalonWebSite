let loggedUser = sessionStorage.getItem('loggedUser');
let registerOrLogin = sessionStorage.getItem('registerOrLogin');


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
        <li class="header__li--nav2"><a href="authentication.html" class="header__a--nav2">Iniciar sesión</a></li>
        <li class="header__li--nav2"><a href="authentication.html" class="header__a--nav2">Registrarse</a></li>`;
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


const Links = document.querySelectorAll('.header__li--nav2 a');
Links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        registerOrLogin = this.textContent.trim().toLowerCase();
        sessionStorage.setItem('registerOrLogin', registerOrLogin);
        window.location.href = "authentication.html";
    });
});


