document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("Enviar").addEventListener("click", function(event) {
        var fechaSeleccionada = new Date(document.getElementById("Fecha").value);

        if (fechaSeleccionada.getDay() === 0) {
            alert("¡Por favor, seleccione una fecha que no sea domingo para su reserva!");
            event.preventDefault();
        }
    });
});