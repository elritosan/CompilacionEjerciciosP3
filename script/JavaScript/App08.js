function GetApp08()
{
    let Valor1 = parseFloat(document.getElementById('Valor1').value);
    let Valor2 = parseFloat(document.getElementById('Valor2').value);
    let Valor3 = parseFloat(document.getElementById('Valor3').value);

    if(!isNaN(Valor1) && !isNaN(Valor2) && !isNaN(Valor3))
    {
        document.getElementById('ResultadoApp08').innerHTML = findSmallestNumber(Valor1,Valor2,Valor3);
    }
    else
    {
        document.getElementById('ResultadoApp08').innerHTML = "";
        // alert("No se Aceptan Valores Nulos");
    }
}

function findSmallestNumber(Valor1, Valor2, Valor3) 
{
    const smallestNumber = Math.min(Valor1, Valor2, Valor3);
    return `<b>El menor de los tres números es:</b> ${smallestNumber}`;
}