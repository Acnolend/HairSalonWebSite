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
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador1"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia1"></nav><nav id="hora1"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion1"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador2"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia2"></nav> <nav id="hora2"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion2"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador3"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia3"></nav> <nav id="hora3"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion3"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador4"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia4"></nav> <nav id="hora4"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion4"></nav></td>
    </tr>
</table>`;
} else {
    linknav.innerHTML = `<table id="main__tabla_de_reservas">
    <tr class="main__tabla_de_reservas--fila_reservas">
        <th>Reservas</th>
        <th>Dia y Hora</th>
        <th>Opciones</th>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador1"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia1"></nav><nav id="hora1"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion1"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador2"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia2"></nav> <nav id="hora2"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion2"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador3"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia3"></nav> <nav id="hora3"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion3"></nav></td>
    </tr>
    <tr class="main__tabla_de_reservas--fila_reservas">
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="identificador4"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="dia4"></nav> <nav id="hora4"></nav></td>
        <td class="main__tabla_de_reservas--elemento_tabla_reservas"><nav id="opcion4"></nav></td>
    </tr>
</table>`;
}