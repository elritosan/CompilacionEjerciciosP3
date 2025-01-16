function GetApp09()
{
    let AnguloIngresado = parseFloat(document.getElementById('AnguloIngresado').value);
    let OperacionT = document.getElementById('OperacionT').value;

    if(!isNaN(AnguloIngresado))
    {
      document.getElementById('ResultadoApp09').innerHTML = calculateTrigonometric(AnguloIngresado,OperacionT);
    }
    else
    {
      document.getElementById('ResultadoApp09').innerHTML = "";
      // alert("No se Aceptan Valores Nulos");
    }
}

function calculateTrigonometric(AnguloIngresado, OperacionT) 
{
    let ResultadoApp09;

    switch (OperacionT) {
      case 'sin':
        ResultadoApp09 = Math.sin(AnguloIngresado * (Math.PI / 180));
        break;
      case 'cos':
        ResultadoApp09 = Math.cos(AnguloIngresado * (Math.PI / 180));
        break;
      case 'tan':
        ResultadoApp09 = Math.tan(AnguloIngresado * (Math.PI / 180));
        break;
      default:
        alert("Seleccione una función válida.");
        return;
    }

    return `<b>El Resultado de ${OperacionT}(${AnguloIngresado}°) es:</b> ${ResultadoApp09.toFixed(4)}`;
}