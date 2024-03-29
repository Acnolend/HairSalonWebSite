fetch('json/date_management_reservations.json')
    .then(response => response.json())
    .then(data => {
    
    const reservations_length = 4;

    const ids = ["identificador1", "identificador2", "identificador3", "identificador4"];
    const days = ["dia1", "dia2", "dia3", "dia4"];
    const time = ["hora1", "hora2", "hora3", "hora4"];
    const conf = ["opcion1", "opcion2", "opcion3", "opcion4"];

    
    for (i = 0; i<reservations_length; i++) {

        
        const id = data.reservas[i].id; 
        const fechas = data.reservas[i].date;
        const horas = data.reservas[i].time;
        const confirmacion = data.reservas[i].confirmed;

        const ides = document.getElementById(ids[i]);
        const dates = document.getElementById(days[i]);
        const times = document.getElementById(time[i]);
        const confirm = document.getElementById(conf[i]);

        ides.innerText = id;
        dates.innerText = fechas;
        times.innerText = horas;
        
    
        let botones_user = "<button class='main__tabla_de_reservas--Boton' type='button'>Editar</button>  <button class='main__tabla_de_reservas--Boton' type='button'>Eliminar</button></td>";
        let botones_admin = "<button class='main__tabla_de_reservas--Boton' type='button'>confirmar</button>  <button class='main__tabla_de_reservas--Boton' type='button'>Eliminar</button></td>";


        if (confirmacion == "true") {
            confirm.innerText = "concluida";
        } else {
            if (admin == true){
                confirm.innerHTML = botones_admin
            } else {
                confirm.innerHTML = botones_user;
            }
            
        }
    
    }
   

})
.catch(error => console.error('Error al cargar el JSON:', error));