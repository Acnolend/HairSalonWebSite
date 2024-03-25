document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/haricuts.json')
    .then(response => response.json())
    .then(data => {
        const main = document.getElementById('main');
        data.Imagenes.forEach(imagen => {
            const div = document.createElement('div');
            div.classList.add('main__div');

            const a = document.createElement('a');
            a.href = "../order.html";
            a.classList.add('main__img--div');

            const img = document.createElement('img');
            img.classList.add('main__img--div');
            img.src = imagen.url;
            img.alt = imagen.Name;

            a.appendChild(img);

            const divDescripcion = document.createElement('div');
            divDescripcion.classList.add('main__div5');

            const h1 = document.createElement('h1');
            h1.classList.add('main__h1--div');
            h1.textContent = imagen.Name;

            const h2 = document.createElement('h2');
            h2.classList.add('main__h2--div');
            h2.textContent = imagen.Descripcion;

            divDescripcion.appendChild(h1);
            divDescripcion.appendChild(document.createElement('br'));
            divDescripcion.appendChild(h2);

            div.appendChild(a);
            div.appendChild(divDescripcion);

            main.appendChild(div);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
