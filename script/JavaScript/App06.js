function clasificarNotaApp06(event) {
    event.preventDefault(); // Evitar recargar la página
    
    const nota = parseInt(document.getElementById('notaApp06').value, 10);
    const resultadoDiv = document.getElementById('ResultadoApp06');
    
    if (isNaN(nota) || nota < 0 || nota > 100) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "Por favor, ingrese una nota válida entre 0 y 100.";
        return;
    }

    let categoria = "";
    if (nota >= 90) categoria = "Excelente";
    else if (nota >= 80) categoria = "Muy Bueno";
    else if (nota >= 70) categoria = "Bueno";
    else if (nota >= 60) categoria = "Regular";
    else categoria = "Insuficiente";

    resultadoDiv.style.display = "block";
    resultadoDiv.className = "alert alert-success";
    resultadoDiv.innerHTML = `<b>Categoría:</b> ${categoria}`;
}