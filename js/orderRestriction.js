console.log("Dentro");
var fechaActual = new Date();

var fechaManana = new Date();
fechaManana.setDate(fechaActual.getDate() + 1);

var fechaDosMeses = new Date();
fechaDosMeses.setMonth(fechaActual.getMonth() + 2);

document.getElementById('Fecha').setAttribute('min', formatoFecha(fechaManana));
document.getElementById('Fecha').setAttribute('max', formatoFecha(fechaDosMeses));

function formatoFecha(date) {
    var yyyy = date.getFullYear();
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var dd = String(date.getDate()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
};