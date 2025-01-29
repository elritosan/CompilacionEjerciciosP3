function GetApp08(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const binario1 = document.getElementById('binario1').value;
    const binario2 = document.getElementById('binario2').value;
    const resultadoDiv = document.getElementById('ResultadoApp08');

    if (esBinarioValido(binario1) && esBinarioValido(binario2)) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-success";
        resultadoDiv.innerHTML = sumarBinarios(binario1, binario2);
    } else {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "Por favor, ingrese números binarios válidos (0 o 1).";
    }
}

function esBinarioValido(binario) {
    return /^[01]+$/.test(binario);
}

function sumarBinarios(binario1, binario2) {
    // Convertir binarios a enteros
    const numero1 = parseInt(binario1, 2);
    const numero2 = parseInt(binario2, 2);

    // Realizar la suma
    const suma = numero1 + numero2;

    // Convertir el resultado de vuelta a binario
    const resultadoBinario = suma.toString(2);

    return `
        <b>Resultados:</b><br>
        La suma de los binarios es: ${resultadoBinario}<br>
        (Decimal: ${suma})
    `;
}

function LimpiarFormularioApp08() {
    document.getElementById('formApp08').reset();
    const resultadoDiv = document.getElementById('ResultadoApp08');
    resultadoDiv.style.display = "none";
}