function GetApp13()
{
    let N = parseFloat(document.getElementById("NumIteraciones").value);

    if(!isNaN(N) && N > 0)
    {
        let R = CalcularSerie(N);
        if(isFinite(R))
        {
            document.getElementById("ResultadoApp13").innerHTML = `<b>Resultado Serie:</b> ${R.toFixed(5)}`;
        }
        else
        {
            document.getElementById("ResultadoApp13").innerHTML = `<b>Resultado Serie:</b> -∞`;
        }
    }
    else
    {
        document.getElementById("ResultadoApp13").innerHTML = "";
        alert("No se Aceptan Valores Nulos, ni igual a 0");
    }
}

function CalcularFactorial(N)
{
    let FactorialR = 1;

    for (let i = 1; i <= N; i++) 
    {
        FactorialR *= i;            
    }

    return FactorialR;
}

function CalcularNumeroPar(N)
{
    return (2*N);
}

function CalcularNumeroImpar(N)
{
    return (2*N+1);
}

function CalcularSerie(N)
{
    let SerieR = 0;

    for (let i = 1; i <= N; i++) 
    {
        if (i % 2 != 0) 
        {
            SerieR += ((CalcularNumeroImpar(i-1)**i)/(CalcularFactorial(CalcularNumeroPar(i))));
        }
        else
        {
            SerieR -= ((CalcularFactorial(CalcularNumeroPar(i)))/(CalcularNumeroImpar(i-1)**i));
        }
    }

    return SerieR;
}