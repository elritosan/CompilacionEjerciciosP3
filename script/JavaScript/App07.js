function GetApp07_TM()
{
    let CadenaTexto = document.getElementById('CadenaTexto').value.toUpperCase();
    document.getElementById('ResultadoApp07').innerHTML =  textToMorse(CadenaTexto);

    if (validarCadenaTexto(CadenaTexto) && CadenaTexto !== "") {
        document.getElementById('ResultadoApp07').innerHTML = textToMorse(CadenaTexto);
    } else {
        document.getElementById('ResultadoApp07').innerHTML = "";
        alert('La cadena contiene caracteres no válidos.');
    }
}

function GetApp07_MT()
{
    let CadenaTexto = document.getElementById('CadenaTexto').value.trim();

    if (validarCadenaMorse(CadenaTexto) && CadenaTexto !== "") {
        document.getElementById('ResultadoApp07').innerHTML = morseToText(CadenaTexto);
    } else {
        document.getElementById('ResultadoApp07').innerHTML = "";
        alert('La cadena contiene caracteres no válidos.');
    }
}


const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};


/*
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '&': '.-...',
    "'": '.----.', '(': '-.--.', ')': '-.--.-', '@': '.--.-.'
};
*/

const reverseMorseCode = {};

for (let char in morseCode) 
{
    const morse = morseCode[char];
    reverseMorseCode[morse] = char;
}

function validarCadenaTexto(CadenaTexto) {
    for (let char of CadenaTexto) {
        if (char !== ' ' && char !== '/' && !morseCode[char]) {
            return false;
        }
    }
    return true;
}

function validarCadenaMorse(CadenaTexto) {
    const morseArray = CadenaTexto.split(' ');

    for (let morse of morseArray) {
        if (morse !== '/' && !reverseMorseCode[morse]) {
            return false;
        }
    }
    return true;
}

function textToMorse(CadenaTexto) 
{
    const morseOutput = CadenaTexto.split('').map(char => {
        if (char === ' ') {
        return '/';
        } else if (morseCode[char]) {
        return morseCode[char];
        } else {
        return char;
        }
    }).join(' ');

    return `<b>Código Morse:</b> ${morseOutput}`;
}

function morseToText(CadenaTexto) 
{
    const textOutput = CadenaTexto.split(' ').map(morse => {
        if (morse === '/') {
        return ' ';
        } else if (reverseMorseCode[morse]) {
        return reverseMorseCode[morse];
        } else {
        return morse;
        }
    }).join('');

    return `<b>Texto:</b> ${textOutput}`;
}