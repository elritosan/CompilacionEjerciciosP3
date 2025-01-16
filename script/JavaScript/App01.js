
function GetApp01()
{
  let Altura = parseFloat(document.getElementById('AlturaPoste').value);
  let Sombra = parseFloat(document.getElementById('LongitudSombra').value);

  if(!isNaN(Altura) && !isNaN(Sombra))
  {
    document.getElementById('ResultadoApp01').innerHTML = calculateAngle(Altura,Sombra);
  }
  else
  {
    document.getElementById('ResultadoApp01').innerHTML = "";
    // alert("No se Aceptan Valores Nulos");
  }
}

function calculateAngle(AlturaPoste, LongitudSombra)
{
  const angleRadians = Math.atan(AlturaPoste / LongitudSombra);
  const angleDegrees = angleRadians * (180 / Math.PI);

  const degrees = Math.floor(angleDegrees);
  const minutes = Math.floor((angleDegrees - degrees) * 60);
  const seconds = Math.round(((angleDegrees - degrees) * 60 - minutes) * 60);
  
  return `<b>El ángulo de incidencia del sol es:</b> ${degrees}° ${minutes}' ${seconds}"`;
}