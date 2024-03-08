let admin = true;
console.log(admin);

const linknav = document.getElementById('main__tabla');
console.log(linknav);

if (!admin) {
    linknav.innerHTML = `<table id="main__tabla_de_reservas">
    <tr class="main__tabla_de_reservas--fila_reservas">
        <th>Reservas</th>
        <th>Dia y Hora</th>
        <th>Opciones</th>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">1</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 18:00</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Editar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">2</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 15:00</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Editar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">3</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 11:00</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Editar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">4</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 20:30</td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas">concluida</td>
    </tr>
</table>`;
} else {
    linknav.innerHTML = `
    <table id="main__tabla_de_reservas">
                <tr class="main__tabla_de_reservas--fila_reservas">
                    <th>Reservas</th>
                    <th>Dia y Hora</th>
                    <th>Opciones</th>
                </tr>
                <tr class="main__tabla_de_reservas--fila_reservas">
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">1</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 18:00</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Confirmar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
                </tr>
                <tr class="main__tabla_de_reservas--fila_reservas">
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">2</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 15:00</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Confirmar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
                </tr>
                <tr class="main__tabla_de_reservas--fila_reservas">
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">3</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 11:00</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas"><button class="main__tabla_de_reservas--Boton" type="button">Confirmar</button>  <button class="main__tabla_de_reservas--Boton" type="button">Eliminar</button></td>
                </tr>
                <tr class="main__tabla_de_reservas--fila_reservas">
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">4</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">15/02/2024 - 20:30</td>
                    <td class="main__tabla_de_reservas--elemento_tabla_reservas">confirmada</td>
                </tr>
            </table>`;
}