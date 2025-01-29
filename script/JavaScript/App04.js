function GetApp04(event) {
    event.preventDefault(); // Evitar recargar la página
    const resultadoDiv = document.getElementById('ResultadoApp04');
    resultadoDiv.style.display = "none";

    const altura = parseFloat(document.getElementById('AlturaPoste').value);
    const sombra = parseFloat(document.getElementById('LongitudSombra').value);

    if (isNaN(altura) || isNaN(sombra) || altura <= 0 || sombra <= 0) {
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "<b>Error:</b> Ambos valores deben ser mayores que 0 y válidos.";
        resultadoDiv.style.display = "block";
        return;
    }

    const resultado = calculateAngle(altura, sombra);
    resultadoDiv.className = "alert alert-success";
    resultadoDiv.innerHTML = resultado;
    resultadoDiv.style.display = "block";
}

function calculateAngle(AlturaPoste, LongitudSombra) {
    const angleRadians = Math.atan(AlturaPoste / LongitudSombra);
    const angleDegrees = angleRadians * (180 / Math.PI);

    const degrees = Math.floor(angleDegrees);
    const minutes = Math.floor((angleDegrees - degrees) * 60);
    const seconds = Math.round(((angleDegrees - degrees) * 60 - minutes) * 60);

    return `<b>El ángulo de incidencia del sol es:</b> ${degrees}° ${minutes}' ${seconds}"`;
}

function LimpiarCampos04() {
    document.getElementById('AlturaPoste').value = "";
    document.getElementById('LongitudSombra').value = "";
    const resultadoDiv = document.getElementById('ResultadoApp04');
    resultadoDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
}
