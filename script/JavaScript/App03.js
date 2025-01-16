function GetApp03()
{
    let Kilos = parseFloat(document.getElementById('KilosGrano').value);
    let Precio = parseFloat(document.getElementById('PrecioGrano').value);  

    if(!isNaN(Kilos) && !isNaN(Precio) && (Kilos - parseInt(Kilos) === 0))
    {
        document.getElementById('ResultadoApp03').innerHTML = calculateProfits(Kilos,Precio);
    }
    else
    {
        document.getElementById('ResultadoApp03').innerHTML = "";
        // alert("No se Aceptan Valores Nulos");
    }
}

function calculateProfits(KilosGrano,PrecioGrano) 
{
    const profits = KilosGrano * PrecioGrano;
    return (profits!=0) ? `<b>Las ganancias son: </b> $${profits.toFixed(2)}` : `!Gratis¡`;
    // return `<b>Las ganancias son: </b> $${profits.toFixed(2)}`;
}