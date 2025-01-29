function GetApp13() {
    let numeros = generarNumeros();
    document.getElementById('ResultadoApp13').innerHTML = 
        `<b>Números generados: <br></b> ${numeros.join(', ')}`;
}

function generarNumeros() {
    let digitos = [1, 2, 3, 4];
    let resultados = [];

    // Generar todos los números de 3 cifras posibles sin dígitos repetidos.
    for (let i = 0; i < digitos.length; i++) {
        for (let j = 0; j < digitos.length; j++) {
            if (j !== i) { // Verificar que el segundo dígito sea diferente del primero
                for (let k = 0; k < digitos.length; k++) {
                    if (k !== i && k !== j) { // Verificar que el tercer dígito sea diferente de los otros dos
                        resultados.push("" + digitos[i] + digitos[j] + digitos[k]);
                    }
                }
            }
        }
    }

    return resultados;
}