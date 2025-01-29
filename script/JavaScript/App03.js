// Función para calcular detalles
function GetApp03() {
    const numeroInput = document.getElementById('NumeroIngresado');
    const resultadoDiv = document.getElementById('ResultadoApp03');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        resultadoDiv.innerHTML = calculateNumberDetails(numero);
        resultadoDiv.classList.remove('d-none', 'alert-danger');
        resultadoDiv.classList.add('alert-success');
    } else {
        resultadoDiv.innerHTML = "<b>Error:</b> Por favor, ingrese un número válido.";
        resultadoDiv.classList.remove('d-none', 'alert-success');
        resultadoDiv.classList.add('alert-danger');
    }
}

// Función para generar los resultados
function calculateNumberDetails(numero) {
    const antecesor = numero - 1;
    const sucesor = numero + 1;
    const raizCuadradaEntera = Math.floor(Math.sqrt(Math.abs(numero)));
    const cantidadCifras = Math.abs(numero).toString().length;

    return `
        <b>Resultados:</b><br>
        Antecesor: ${antecesor}<br>
        Sucesor: ${sucesor}<br>
        Parte entera de la raíz cuadrada: ${raizCuadradaEntera}<br>
        Cantidad de cifras: ${cantidadCifras}
    `;
}

// Función para limpiar campos
function LimpiarCampos03() {
    const numeroInput = document.getElementById('NumeroIngresado');
    const resultadoDiv = document.getElementById('ResultadoApp03');

    numeroInput.value = ''; // Limpia el campo de entrada
    resultadoDiv.classList.add('d-none'); // Oculta el resultado
    resultadoDiv.innerHTML = ''; // Limpia el contenido
}

// Función para permitir solo números enteros
function KeyPressTodosEnteros(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode === 45) { // Números o signo "-"
        return true;
    }
    return false;
}
