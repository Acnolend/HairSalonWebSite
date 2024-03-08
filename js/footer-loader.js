fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementsByClassName('footer')[0].innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el footer: ', error));