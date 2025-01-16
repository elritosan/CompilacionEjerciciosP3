function KeyPressEnterosPositivos(EventoTeclado){
			
    // code es la representación decimal ASCII de la tecla presionada.
    var code = (EventoTeclado.which) ? EventoTeclado.which : EventoTeclado.keyCode;
    
    // ASCII 08 : BackSpace
    // ASCII 48 a 57 : Digitos Númericos

    return ((code==8) || (code>=48 && code<=57)) ? true : false;
}

function KeyPressTodosEnteros(EventoTeclado){
			
    // code es la representación decimal ASCII de la tecla presionada.
    var code = (EventoTeclado.which) ? EventoTeclado.which : EventoTeclado.keyCode;
    
    // ASCII 08 : BackSpace
    // ASCII 48 a 57 : Digitos Númericos
    // ASCII 45: Signo '-'

    return ((code==8) || (code>=48 && code<=57) || code==45) ? true : false;
}

function KeyPressRealesPositivos(EventoTeclado){
			
    // code es la representación decimal ASCII de la tecla presionada.
    var code = (EventoTeclado.which) ? EventoTeclado.which : EventoTeclado.keyCode;
    
    // ASCII 08 : BackSpace
    // ASCII 48 a 57 : Digitos Númericos
    // ASCII 46 : Punto Decimal

    return ((code==8) || (code>=48 && code<=57) || code==46) ? true : false;
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

function AnularRefreshSubmit()
{
    return false;
}

function KeyPressMorse(EventoTeclado){
    // code es la representación decimal ASCII de la tecla presionada.
    var code = (EventoTeclado.which) ? EventoTeclado.which : EventoTeclado.keyCode;
    
    // Filtrar solo los caracteres permitidos según el código Morse
    var CaracteresPermitidos = ".-0123456789/ ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    // Convertir el código ASCII a carácter
    var character = String.fromCharCode(code);
    
    // Verificar si el carácter está permitido
    return CaracteresPermitidos.includes(character);
}
