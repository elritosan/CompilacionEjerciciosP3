function GetApp15() {
    let tabla = generarTablaMultiplicar();
    document.getElementById('ResultadoApp15').innerHTML = tabla;
}

function generarTablaMultiplicar() {
    let tablaHTML = "<table class='table table-striped table-bordered table-hover'>" +
                    "<thead class='table-dark'><tr><th>*</th>";

    // Cabecera de la tabla (numeros del 1 al 12)
    for (let i = 1; i <= 12; i++) {
        tablaHTML += `<th>${i}</th>`;
    }
    tablaHTML += "</tr></thead><tbody>";

    // Filas de la tabla
    for (let i = 1; i <= 12; i++) {
        tablaHTML += `<tr><th class='table-secondary'>${i}</th>`;  // Primera columna (números 1 a 12)
        for (let j = 1; j <= 12; j++) {
            tablaHTML += `<td>${i * j}</td>`;  // Resultado de la multiplicación
        }
        tablaHTML += "</tr>";
    }

    tablaHTML += "</tbody></table>";
    return tablaHTML;
}