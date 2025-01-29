function GetApp01() {
    const ladoA = parseFloat(document.getElementById('LadoA').value);
    const ladoB = parseFloat(document.getElementById('LadoB').value);
    const ladoC = parseFloat(document.getElementById('LadoC').value);
    const resultadoDiv = document.getElementById('ResultadoApp01');

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "<b>Error:</b> Todos los lados deben ser números mayores que 0.";
        return;
    }

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        const s = (ladoA + ladoB + ladoC) / 2;
        const area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-success";
        resultadoDiv.innerHTML = `<b>El área del triángulo es:</b> ${area.toFixed(2)} m²`;
    } else {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "<b>Error:</b> Los valores ingresados no forman un triángulo válido.";
    }
}

function LimpiarCampos01() {
    document.getElementById('LadoA').value = '';
    document.getElementById('LadoB').value = '';
    document.getElementById('LadoC').value = '';
    const resultadoDiv = document.getElementById('ResultadoApp01');
    resultadoDiv.style.display = 'none';
    resultadoDiv.innerHTML = '';
}

function KeyPressRealesPositivos(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode === 46) {
        return true;
    }
    return false;
}