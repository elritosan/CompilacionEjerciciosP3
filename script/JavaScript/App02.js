function GetApp02() {
    let baseMayor = parseFloat(document.getElementById('BaseMayor').value);
    let baseMenor = parseFloat(document.getElementById('BaseMenor').value);
    let altura = parseFloat(document.getElementById('Altura').value);

    if (!isNaN(baseMayor) && !isNaN(baseMenor) && !isNaN(altura)) {
        document.getElementById('ResultadoApp02').innerHTML = calculateTrapecioArea(baseMayor, baseMenor, altura);
    } else {
        document.getElementById('ResultadoApp02').innerHTML = "Por favor, ingrese valores válidos.";
    }
}

function calculateTrapecioArea(baseMayor, baseMenor, altura) {
    if (baseMayor > 0 && baseMenor > 0 && altura > 0) {
        const area = ((baseMayor + baseMenor) * altura) / 2;
        return `<b>El área del trapecio es:</b> ${area.toFixed(2)} m²`;
    } else {
        return "<b>Error:</b> Todos los valores deben ser mayores a 0.";
    }
}

function LimpiarCampos() {
    document.getElementById('BaseMayor').value = '';
    document.getElementById('BaseMenor').value = '';
    document.getElementById('Altura').value = '';
    document.getElementById('ResultadoApp02').innerHTML = '';
}