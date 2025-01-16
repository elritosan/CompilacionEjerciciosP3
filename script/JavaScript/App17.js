function GetApp17()
{
    let A = document.getElementById("NumCadena").value;
    document.getElementById("ResultadoApp17").innerHTML = `<b>Suma De Números de la Cadena:</b> ${sumNumbers(A)}`;
}


function sumNumbers(NumCadena)
{
    let numbers = NumCadena.match(/-?\d+(\.\d+)?/g) || [];

    if (numbers.length === 0) 
    {
      alert("No se encontraron números en la cadena.");
      return 0;
    }

    let sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);

    return sum;
}