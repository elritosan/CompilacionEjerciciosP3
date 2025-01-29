function GetApp11() {
    let numero = parseInt(document.getElementById('Numero').value.trim());

    if (!isNaN(numero) && numero >= 0) {
        let resultado = analizarNumero(numero);
        document.getElementById('ResultadoApp11').innerHTML = resultado;
    } else {
        document.getElementById('ResultadoApp11').innerHTML = "Por favor, ingrese un número válido.";
    }
}

function analizarNumero(numero) {
    let resultado = `<b>Resultados:</b><br>`;

    // Verificar si el número es perfecto
    resultado += esPerfecto(numero) ? `El número ${numero} es un número perfecto.<br>` : `El número ${numero} no es perfecto.<br>`;
    
    // Verificar si el número es capicúa
    resultado += esCapicua(numero) ? `El número ${numero} es capicúa.<br>` : `El número ${numero} no es capicúa.<br>`;

    // Calcular factorial
    const factorial = calcularFactorial(numero);
    resultado += `El factorial de ${numero} es ${formatearFactorial(factorial)}.<br>`;

    // Verificar si el número es factorión
    resultado += esFactorion(numero) ? `El número ${numero} es un factorión.<br>` : `El número ${numero} no es un factorión.<br>`;

    // Calcular el número de cifras
    const numCifras = numero.toString().length;
    resultado += `El número ${numero} tiene ${numCifras} cifras.<br>`;

    return resultado;
}

function esPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) sumaDivisores += i;
    }
    return sumaDivisores === numero;
}

function esCapicua(numero) {
    const strNumero = numero.toString();
    return strNumero === strNumero.split('').reverse().join('');
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function formatearFactorial(factorial) {
    if (factorial.toString().length > 15) {
        return factorial.toExponential(3); // Notación científica con 3 decimales
    }
    return factorial.toLocaleString(); // Formato estándar si es corto
}

function esFactorion(numero) {
    let sumaFactCifras = 0;
    const cifras = numero.toString().split('');
    cifras.forEach(cifra => {
        sumaFactCifras += calcularFactorial(parseInt(cifra));
    });
    return sumaFactCifras === numero;
}