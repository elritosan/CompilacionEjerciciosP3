function GetApp17() {
    let oracion = document.getElementById('Oracion').value.trim();

    if (oracion.length > 0) {
        document.getElementById('ResultadoApp17').innerHTML = analizarCadena(oracion);
    } else {
        document.getElementById('ResultadoApp17').innerHTML = "Por favor, ingrese una oración válida.";
    }
}
function analizarCadena(oracion) {
    // Creamos un objeto para almacenar las frecuencias de cada carácter
    let frecuencia = {};

    // Iteramos sobre cada carácter en la oración
    for (let caracter of oracion) {
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // Generamos la salida con los caracteres y sus frecuencias
    let resultado = "<b>Frecuencia de caracteres:</b><br>";
    for (let caracter in frecuencia) {
        resultado += `${caracter}: ${frecuencia[caracter]}<br>`;
    }

    return resultado;
}
