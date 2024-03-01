let loggedUser = true;
console.log(loggedUser);

const navLink = document.getElementsByClassName('header__nav2')[0];
console.log(navLink);

if (loggedUser) {
    navLink.innerHTML = `<li class="header__li--nav2"><a href="date_managment.html" class="header__a--nav2">Nombre de usuario</a></li>`;
} else {
    navLink.innerHTML = `
        <li class="header__li--nav2"><a href="login.html" class="header__a--nav2">Iniciar sesión</a></li>
        <li class="header__li--nav2"><a href="register.html" class="header__a--nav2">Registrarse</a></li>`;
}