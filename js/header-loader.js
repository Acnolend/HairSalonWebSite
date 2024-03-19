fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementsByClassName('header')[0].innerHTML = data;
        const scriptElement = document.createElement('script');
        scriptElement.src = 'js/toolbar-authentication.js';
        document.body.appendChild(scriptElement);
    })
    .catch(error => console.error('Error al cargar el header: ', error));
