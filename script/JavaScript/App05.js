function GetApp05(event) {
    event.preventDefault(); // Evitar que el formulario se recargue

    const N1 = document.getElementById('Num01').value;
    const N2 = document.getElementById('Num02').value;
    const N3 = document.getElementById('Num03').value;
    const N4 = document.getElementById('Num04').value;
    const N5 = document.getElementById('Num05').value;

    if (N1.length === 5 && N2.length === 5 && N3.length === 5 && N4.length === 5 && N5.length === 5) {
        const resultado = CalcularSextoNumero(N1, N2, N3, N4, N5);
        const resultadoDiv = document.getElementById('ResultadoApp05');
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-success"; // Mensaje de éxito
        resultadoDiv.innerHTML = resultado;
    } else {
        const resultadoDiv = document.getElementById('ResultadoApp05');
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger"; // Mensaje de error
        resultadoDiv.innerHTML = "Los Números Ingresados deben ser de 5 dígitos";
    }
}

function CalcularSextoNumero(N1, N2, N3, N4, N5) {
    // Extrae los dígitos en las posiciones solicitadas
    return `<b>El Sexto Número es:</b> ${N1[0]}${N2[1]}${N3[2]}${N4[3]}${N5[4]}`;
}

function LimpiarFormulario() {
    // Limpia los campos del formulario y el resultado
    document.getElementById('formApp05').reset();
    document.getElementById('ResultadoApp05').style.display = "none";
}
