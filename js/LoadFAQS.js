document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('../json/contactus.json');
        const data = await response.json();
        const mainSection = document.querySelector('.main__section');

        data.Preguntas.forEach(pregunta => {
            const ul = document.createElement('ul');
            ul.classList.add('main__ul--section');

            const li = document.createElement('li');
            li.classList.add('main__li--section');

            const divPregunta = document.createElement('div');
            divPregunta.classList.add('main__div-section');

            const span = document.createElement('span');
            span.classList.add('main__span--section');

            const spanPregunta = document.createElement('span');
            spanPregunta.textContent = pregunta.Pregunta;

            const divRespuesta = document.createElement('div');
            divRespuesta.classList.add('main__div2--section');

            const pRespuesta = document.createElement('p');
            pRespuesta.classList.add('main__p--div');
            pRespuesta.textContent = pregunta.Respuesta;

            divPregunta.appendChild(span);
            divPregunta.appendChild(spanPregunta);

            divRespuesta.appendChild(pRespuesta);

            li.appendChild(divPregunta);
            li.appendChild(divRespuesta);

            mainSection.querySelector('.main__ul--section').appendChild(li);
        });

        const script = document.createElement('script');
        script.src = '../js/Order.js';
        document.body.appendChild(script);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
});
