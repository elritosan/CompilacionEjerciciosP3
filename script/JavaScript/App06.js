function GetApp06()
{
  let N = parseFloat(document.getElementById('ValorN').value);

  if(!isNaN(N))
  {
    document.getElementById('ResultadoApp06').innerHTML = AnalizarNumero(N);
  }
  else
  {
    document.getElementById('ResultadoApp06').innerHTML = "";
    // alert("No se Aceptan Valores Nulos");
  }
}

function AnalizarNumero(N) 
{
    return `
      <p><b>${N}</b> ${N >= 0 ? 'es positivo' : 'es negativo'}</p>
      <p><b>${N}</b> ${N % 2 === 0 ? 'es par' : 'es impar'}</p>
      <p><b>${N}</b> ${N % 5 === 0 ? 'es múltiplo de 5' : 'no es múltiplo de 5'}</p>
      <p><b>${N}</b> ${N % 10 === 0 ? 'es múltiplo de 10' : 'no es múltiplo de 10'}</p>
      <p><b>${N}</b> ${N < 100 ? 'es menor que 100' : 'no es menor que 100'}</p>
    `;
}