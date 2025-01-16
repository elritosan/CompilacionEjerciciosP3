function GetApp11()
{
    let NP = parseInt(document.getElementById('NumFilasP').value);

    if(!isNaN(NP) && NP > 0 && NP <= 13)
    {
        document.getElementById('ResultadoApp11').innerHTML = generatePyramid(NP);
    }
    else
    {
        document.getElementById('ResultadoApp11').innerHTML = "";
        alert("No se Aceptan Valores Nulos, y solo valores entre 1 y 13");
    }
}

function generatePyramid(NumFilasP)
{
    let pyramidPattern = '';

    for (let i = 1; i <= NumFilasP; i++) 
    {
        for (let j = 1; j <= i; j++) 
        {
        pyramidPattern += '*';
        }
        pyramidPattern += '<br>';
    }

    return pyramidPattern;
}

