function GetApp18() {
    let longitud = document.getElementById('longitud').value;
    let incluirMayusculas = document.getElementById('incluirMayusculas').checked;
    let incluirMinusculas = document.getElementById('incluirMinusculas').checked;
    let incluirNumeros = document.getElementById('incluirNumeros').checked;
    let incluirEspeciales = document.getElementById('incluirEspeciales').checked;

    if (esLongitudValida(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales)) {
        longitud = parseInt(longitud);  // Aseguramos que longitud sea un número entero
        document.getElementById('ResultadoApp18').innerHTML = generarContrasena(
            longitud,
            incluirMayusculas,
            incluirMinusculas,
            incluirNumeros,
            incluirEspeciales
        );
    } else {
        document.getElementById('ResultadoApp18').innerHTML = "Por favor, ingrese una longitud válida (mínimo 6) y seleccione al menos una opción.";
    }
}

function esLongitudValida(longitud, mayus, minus, numeros, especiales) {
    return /^\d+$/.test(longitud) && parseInt(longitud) >= 6 && (mayus || minus || numeros || especiales);
}

function generarContrasena(longitud, mayus, minus, numeros, especiales) {
    const caracteres = {
        mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        minusculas: 'abcdefghijklmnopqrstuvwxyz',
        numeros: '0123456789',
        especiales: '!@#$%^&*()-_=+[]{}|;:,.<>?/`~'
    };

    let conjuntoCaracteres = '';
    if (mayus) conjuntoCaracteres += caracteres.mayusculas;
    if (minus) conjuntoCaracteres += caracteres.minusculas;
    if (numeros) conjuntoCaracteres += caracteres.numeros;
    if (especiales) conjuntoCaracteres += caracteres.especiales;

    if (conjuntoCaracteres === '') return 'Seleccione al menos un tipo de carácter.';

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * conjuntoCaracteres.length);
        contrasena += conjuntoCaracteres[randomIndex];
    }

    return `
        <b>Contraseña Generada:</b><br>
        ${contrasena}
    `;
}