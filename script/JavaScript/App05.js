function GetApp05()
{
    let R1 = parseFloat(document.getElementById('R1').value);
    let R2 = parseFloat(document.getElementById('R2').value);
    
    if(!isNaN(R1) && !isNaN(R2) && R1>0 && R2>0)
    {
        document.getElementById('ResultadoApp05').innerHTML = calculateEquivalentResistance(R1,R2);
    }
    else
    {
        document.getElementById('ResultadoApp05').innerHTML = "";
        alert("No se Aceptan Valores Nulos, ni iguales a 0");
    }
}

function calculateEquivalentResistance(R1, R2) 
{
    const equivalentResistance = (R1 * R2) / (R1 + R2);
    return `<b>La resistencia equivalente en paralelo es:</b> ${equivalentResistance.toFixed(2)} ohmios`;
}