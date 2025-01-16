const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function GetApp12()
{
    let NumAdivina = parseFloat(document.getElementById('guess').value);

    if (!isNaN(NumAdivina) && ValidarRangoInterno(NumAdivina,1,10))
    {
        document.getElementById('ResultadoApp12').innerHTML = checkGuess(NumAdivina);
    }
    else
    {
        document.getElementById('ResultadoApp12').innerHTML = "";
        alert("Solo Números del 1 al 10");
    }
}

function ValidarRangoInterno(Num, LimInferior, LimSuperior)
{
    return ((Num >= LimInferior && Num <= LimSuperior)) ? true : false;
}

function checkGuess(userGuess) 
{
    attempts++;

    if (userGuess === randomNumber) {
        return `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`;
    } else if (userGuess < randomNumber) {
        return `El número a adivinar es mayor. Intenta nuevamente.`;
    } else {
        return `El número a adivinar es menor. Intenta nuevamente.`;
    }
}