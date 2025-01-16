function GetApp04()
{
    let N1 = document.getElementById('Num01').value;
    let N2 = document.getElementById('Num02').value;
    let N3 = document.getElementById('Num03').value;
    let N4 = document.getElementById('Num04').value;
    let N5 = document.getElementById('Num05').value;

    // !isNaN(N1) && !isNaN(N2) && !isNaN(N3) && !isNaN(N4) && !isNaN(N5)
    if(N1.length == 5 && N2.length == 5 && N3.length == 5 && N4.length == 5 && N5.length == 5)
    {
        document.getElementById('ResultadoApp04').innerHTML = CalcularSextoNumero(N1, N2, N3, N4, N5);
    }
    else
    {
        document.getElementById('ResultadoApp04').innerHTML = "";
        alert("Los Números Ingresados deben ser de 5 dígitos");
    }
}

function CalcularSextoNumero(N1, N2, N3, N4, N5)
{
    return `<b>El Sexto Número es:</b> ${N1[4]}${N2[2]}${N3[0]}${N4[2]}${N5[4]}`
}