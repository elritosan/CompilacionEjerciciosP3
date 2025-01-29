function GetApp09() {
    let kilometros = document.getElementById('kilometros').value;

    if (esNumeroValido(kilometros)) {
        kilometros = parseFloat(kilometros);
        document.getElementById('ResultadoApp09').innerHTML = calcularMontoAlquiler(kilometros);
    } else {
        document.getElementById('ResultadoApp09').innerHTML = "Por favor, ingrese un número válido de kilómetros.";
    }
}

function esNumeroValido(kilometros) {
    return /^\d+(\.\d+)?$/.test(kilometros);
}

function calcularMontoAlquiler(kilometros) {
    const montoBase = 300000; // Monto fijo para los primeros 300 km
    const ivaPorcentaje = 0.20; // Porcentaje del IVA

    let montoSinIva;

    if (kilometros <= 300) {
        montoSinIva = montoBase / (1 + ivaPorcentaje);
    } else if (kilometros <= 1000) {
        let exceso = kilometros - 300;
        let montoAdicional = exceso * 15000;
        montoSinIva = (montoBase + montoAdicional) / (1 + ivaPorcentaje);
    } else {
        let exceso1000 = kilometros - 1000;
        let montoAdicional = (700 * 15000) + (exceso1000 * 10000);
        montoSinIva = (montoBase + montoAdicional) / (1 + ivaPorcentaje);
    }

    let montoConIva = montoSinIva * (1 + ivaPorcentaje);
    let montoIva = montoConIva - montoSinIva;

    return `
        <b>Resultados:</b><br>
        Valor del IVA : $${montoIva.toLocaleString()}<br>
        Valor total a pagar (incluido IVA): $${montoConIva.toLocaleString()}<br>
        
    `;
}

function KeyPressTodosReales(EventoTeclado){
			
    // code es la representación decimal ASCII de la tecla presionada.
    var code = (EventoTeclado.which) ? EventoTeclado.which : EventoTeclado.keyCode;
    
    // ASCII 08: BackSpace
    // ASCII 48 a 57: Digitos Númericos
    // ASCII 46: Punto Decimal
    // ASCII 45: Signo '-'

    return ((code==8) || (code>=48 && code<=57) || code==46 || code==45) ? true : false;
}


