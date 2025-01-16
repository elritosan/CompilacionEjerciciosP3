function GetApp15()
{
    let N = parseInt(document.getElementById("NumTerminosF").value);

    if(!isNaN(N) && N > 0)
    {
        document.getElementById("ResultadoApp15").innerHTML = `<b>Serie Fibonacci:</b> ${MostrarSerieFibonacci(N)}`;
    }
    else
    {
        document.getElementById("ResultadoApp15").innerHTML = "";
        alert("No se Aceptan Valores Nulos, ni igual a 0");
    }
}

function CalcularNesimoTerminoFibonacci(i)
{
    return parseInt(((((1+Math.sqrt(5))**i)-((1-Math.sqrt(5))**i))/((2**i)*(Math.sqrt(5)))));
}

function MostrarSerieFibonacci(N)
{
    let ArregloFibonacci = [];

    for (let i = 0; i < N; i++) 
    {
        ArregloFibonacci[i] = CalcularNesimoTerminoFibonacci(i);
    }

    return ArregloFibonacci.join(", ");
}