function GetApp18()
{
    let Filas = parseInt(document.getElementById("FilasMatriz").value);
    let Columnas = parseInt(document.getElementById("ColumnasMatriz").value);

    //Declara Matriz

    let ElementosMatriz = new Array(Filas);
    for (let i = 0; i < Filas; i++) 
    {
        ElementosMatriz[i] = new Array(Columnas);
        for (let j = 0; j < Columnas; j++) 
        {
            let idValor = "input_" + i + j;
            let Valor = parseFloat(document.getElementById(idValor).value);
            ElementosMatriz[i][j] = (!isNaN(Valor) ? Valor : 0);
        }
    }

    // for (let x in ElementosMatriz) {
    //     console.log(x + " = " + ElementosMatriz[x]);
    // }

    document.getElementById("ResultadoApp18").innerHTML = performMatrixOperations(ElementosMatriz);
}

function performMatrixOperations(matrix) 
{
    let positiveCount = 0;
    let negativeCount = 0;
    let totalSum = 0;
    let evenColumnSum = 0;

    for (let i = 0; i < matrix.length; i++) 
    {
      for (let j = 0; j < matrix[i].length; j++) 
      {
        totalSum += matrix[i][j];

        if (matrix[i][j] > 0) {
          positiveCount++;
        } else if (matrix[i][j] < 0) {
          negativeCount++;
        }

        if (j % 2 != 0) {
          evenColumnSum += matrix[i][j];
        }
      }
    }

    totalSum = (!isNaN(totalSum)) ? totalSum : 0;
    evenColumnSum = (!isNaN(evenColumnSum)) ? evenColumnSum : 0;

    // Mostrar resultados
    return `
      <b>Cantidad de elementos positivos:</b> ${positiveCount} <br>
      <b>Cantidad de elementos negativos:</b> ${negativeCount} <br>
      <b>Suma de todos los elementos:</b> ${totalSum} <br>
      <b>Suma de elementos en columnas de orden par:</b> ${evenColumnSum}
    `;
}

function DimensionarMatriz()
{
    let Filas = parseInt(document.getElementById("FilasMatriz").value);
    let Columnas = parseInt(document.getElementById("ColumnasMatriz").value);

    generarTabla(Filas,Columnas);

    if(!(!isNaN(Filas) && !isNaN(Columnas) && Filas > 0 && Columnas > 0))
    {
      document.getElementById("ResultadoApp18").innerHTML = "";
    }
}

function generarTabla(filas, columnas) 
{
    // Obtener la referencia al elemento div
    let div = document.getElementById("MatrizApp18");

    // Eliminar la tabla existente antes de generar una nueva
    eliminarTabla(div);

    // Crear un elemento <table> y un elemento <tbody>
    let tabla = document.createElement("table");

    tabla.className = "TipoMatriz";

    let tbody = document.createElement("tbody");

    // Crear las filas y columnas de la tabla
    for (let i = 0; i < filas; i++) {
        // Crear una fila de la tabla
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            // Crear una celda de la fila
            let celda = document.createElement("td");

            // Crear un input de tipo texto con un id único
            let input = document.createElement("input");

            input.type = "text";
            input.id = "input_" + i + j;
            input.className = "CeldasMatriz"
            input.maxLength = "5";

            input.onkeypress = function(event) {
                return KeyPressTodosReales(event);
            };

            // Añadir el input a la celda
            celda.appendChild(input);

            // Añadir la celda a la fila
            fila.appendChild(celda);
        }

        // Añadir la fila al cuerpo de la tabla
        tbody.appendChild(fila);
    }

    // Añadir el cuerpo de la tabla al elemento tabla
    tabla.appendChild(tbody);

    // Añadir la tabla al div
    div.appendChild(tabla);
}

function eliminarTabla(div) 
{
    // Eliminar todos los elementos hijos del div
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

// Llamar a la función para generar una tabla de 3 filas y 4 columnas
// generarTabla(7, 4);