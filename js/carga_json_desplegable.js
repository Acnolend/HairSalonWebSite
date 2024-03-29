fetch("json/desplegable.json")
    .then(response => response.json())
    .then(data => {

        const days = ["day1", "day2", "day3", "day4"];
        const time = ["hour1", "hour2", "hour3", "hour4"];

        const select = document.getElementById("selector");
        select.innerHTML = '';

        const reservations_length = data.desplegable.length;

        for (let i = 0;i<reservations_length;i++) {

            const dia = data.desplegable[i].dia;
            const hora = data.desplegable[i].hora;

            const newOption = document.createElement('option');
            newOption.value = dia + ' -- ' + hora;
            newOption.textContent = dia + ' -- ' + hora;

            // Agregar la nueva opción al select
            select.appendChild(newOption);
        }
    
    })
.catch(error => console.error('Error al cargar el JSON:', error));