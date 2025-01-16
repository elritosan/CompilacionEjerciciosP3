function GetApp02()
{
    let Radio = parseFloat(document.getElementById('RadioCilindro').value);
    let Altura = parseFloat(document.getElementById('AlturaCilindro').value);

    if(!isNaN(Radio) && !isNaN(Altura))
    {
        document.getElementById('ResultadoApp02').innerHTML = calculateVolume(Radio,Altura);
    }
    else
    {
        document.getElementById('ResultadoApp02').innerHTML = "";
        // alert("No se Aceptan Valores Nulos");
    }
}


function calculateVolume(Radio, Altura) 
{
    const volume = Math.PI * Math.pow(Radio, 2) * Altura;

    return `<b>El volumen del depósito cilíndrico es:</b> ${volume.toFixed(2)} metros cúbicos`;
}