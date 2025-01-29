const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Lo sentimos, tu navegador no soporta reconocimiento de voz.");
} else {
    let reconocimiento = new SpeechRecognition();
    reconocimiento.lang = 'es-ES'; // Idioma: español
    reconocimiento.interimResults = false; // Resultados provisionales desactivados
    reconocimiento.maxAlternatives = 1; // Una alternativa de reconocimiento

    function iniciarReconocimientoVoz() {
        // Limpiar resultados previos
        document.getElementById('textoReconocido').textContent = "[Nada aún]";

        // Iniciar el reconocimiento
        reconocimiento.start();

        reconocimiento.onresult = function (event) {
            const texto = event.results[0][0].transcript;
            document.getElementById('textoReconocido').textContent = texto;

            // Procesar comandos específicos
            procesarComandoVoz(texto.toLowerCase());
        };

        reconocimiento.onerror = function (event) {
            document.getElementById('textoReconocido').textContent = 
                "Error: " + event.error;
        };

        reconocimiento.onend = function () {
            console.log("Reconocimiento finalizado.");
        };
    }
}

function procesarComandoVoz(texto) {
    // Procesar comandos básicos
    const salida = document.getElementById('ResultadoApp16');

    if (texto.includes('hola')) {
        salida.innerHTML += "<p>¡Hola! ¿En qué puedo ayudarte?</p>";
    } else if (texto.includes('hora')) {
        const ahora = new Date();
        salida.innerHTML += `<p>La hora actual es: ${ahora.toLocaleTimeString()}</p>`;
    } else if (texto.includes('fecha')) {
        const hoy = new Date();
        salida.innerHTML += `<p>La fecha de hoy es: ${hoy.toLocaleDateString()}</p>`;
    } else if (texto.includes('gracias')) {
        salida.innerHTML += "<p>¡De nada! 😊</p>";
    } else {
        salida.innerHTML += `<p>No entendí el comando: \"${texto}\"</p>`;
    }
}