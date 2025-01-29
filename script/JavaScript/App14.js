function GetApp14() {
    // Obtener el contenedor para mostrar los resultados
    const resultadoContenedor = document.getElementById('ResultadoApp14');

    // Limpiar el contenido previo
    resultadoContenedor.innerHTML = "";

    // Generar todos los números de dos cifras y verificar la propiedad
    const resultados = [];
    for (let num1 = 10; num1 <= 99; num1++) {
        for (let num2 = 10; num2 <= 99; num2++) {
            const productoOriginal = num1 * num2;
            const num1Invertido = parseInt(intercambiarCifras(num1.toString()));
            const num2Invertido = parseInt(intercambiarCifras(num2.toString()));
            const productoInvertido = num1Invertido * num2Invertido;

            // Verificar la propiedad
            if (productoOriginal === productoInvertido) {
                resultados.push(
                    `<p>${num1} x ${num2} = ${productoOriginal} (invertido: ${num1Invertido} x ${num2Invertido} = ${productoInvertido})</p>`
                );
            }
        }
    }

    // Mostrar resultados o mensaje si no hay coincidencias
    if (resultados.length > 0) {
        resultadoContenedor.innerHTML = resultados.join("");
    } else {
        resultadoContenedor.innerHTML = 
            "<p style='color: red;'>No se encontraron números de dos cifras que cumplan con esta propiedad.</p>";
    }
}

function intercambiarCifras(numero) {
    // Intercambiar las cifras de un número de dos dígitos
    return numero[1] + numero[0];
}