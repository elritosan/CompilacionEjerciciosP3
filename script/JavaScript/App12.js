function calcularNumerosApp12() {
    const resultadoDiv = document.getElementById('ResultadoApp12');
    let numerosValidos = [];

    for (let num = 1200; num <= 2000; num++) {
        if (esValido(num)) {
            numerosValidos.push(num);
        }
    }

    if (numerosValidos.length > 0) {
        resultadoDiv.innerHTML = `<p class="text-center"><b>Números encontrados:<br></b> ${numerosValidos.join(', ')}</p>`;
    } else {
        resultadoDiv.innerHTML = `<p class="text-center"><b>No se encontraron números que cumplan las condiciones.</b></p>`;
    }
}

// Función para verificar si un número cumple las condiciones
function esValido(num) {
    if (num % 5 !== 0) return false; // Debe ser divisible por 5

    let divisores = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisores.push(i);
            if (i !== num / i) divisores.push(num / i);
        }
    }

    // Verificar si tiene exactamente 4 divisores
    if (divisores.length !== 4) return false;

    // Verificar si los divisores son 1, 5, otro primo, y el número
    if (!divisores.includes(1) || !divisores.includes(5)) return false;

    // Identificar el divisor primo (diferente de 1, 5 y el propio número)
    const otroDivisor = divisores.find(
        (d) => d !== 1 && d !== 5 && d !== num
    );
    if (!esPrimo(otroDivisor)) return false;

    return true;
}

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}