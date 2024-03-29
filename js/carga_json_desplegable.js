fetch("json/desplegable.json")
    .then(response => response.json())
    .then(data => {

        const days = ["day1", "day2", "day3", "day4"];
        const time = ["hour1", "hour2", "hour3", "hour4"];

        const reservations_length = 4;

        for (i = 0;i<reservations_length;i++) {

            const dia = data.desplegable[i].dia;
            const hora = data.desplegable[i].hora;

            const dates = document.getElementById(days[i]);
            const times = document.getElementById(time[i]);

            dates.innerText = dia;
            times.innerText = hora;
        }
    
    })
.catch(error => console.error('Error al cargar el JSON:', error));