function GetApp14()
{
    let N = parseInt(document.getElementById("NumRazon").value);

    if(!isNaN(N) && N > 0)
    {
        document.getElementById("ResultadoApp14").innerHTML = `<b>Número Pi:</b> ${CalcularNumeroPi(N).toFixed(10)}`;
    }
    else
    {
        document.getElementById("ResultadoApp14").innerHTML = "";
        alert("No se Aceptan Valores Nulos, ni igual a 0");
    }
}

function CantidadIteraciones(N)
{
    return parseInt(((N - 1) / 2));
}

function CalcularNumeroPi(N)
{
    let R = 0;
    let M = CantidadIteraciones(N);

    for (let i = 0; i <= M; i++)
    {
        R += (4 * (((-1)**i)/(2*i + 1)));
    }

    return R;
}