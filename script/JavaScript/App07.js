function GetApp07(event) {
    event.preventDefault(); // Evitar recargar la página

    const tiempoVuelo = parseInt(document.getElementById('TiempoVuelo').value, 10);
    const tiempoTranscurrido = parseInt(document.getElementById('TiempoTranscurrido').value, 10);
    const resultadoDiv = document.getElementById('ResultadoApp07');

    // Validación de campos
    if (isNaN(tiempoVuelo) || isNaN(tiempoTranscurrido) || tiempoVuelo <= 0 || tiempoTranscurrido < 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "alert alert-danger";
        resultadoDiv.innerHTML = "Por favor, ingrese valores válidos.";
        return;
    }

    resultadoDiv.style.display = "block";
    resultadoDiv.className = "alert alert-success";
    resultadoDiv.innerHTML = calcularFase(tiempoVuelo, tiempoTranscurrido);
}

function calcularFase(tiempoVuelo, tiempoTranscurrido) {
    const despegue = 10; // minutos
    const aterrizaje = 0.25; // minutos (15 segundos)
    const vueloEstable = tiempoVuelo;

    const duracionTotal = despegue + vueloEstable + aterrizaje;

    let fase = "";
    if (tiempoTranscurrido < despegue) {
        fase = "El avión está en la fase de despegue.";
    } else if (tiempoTranscurrido < despegue + vueloEstable) {
        fase = "El avión está en la fase de vuelo estable.";
    } else if (tiempoTranscurrido <= duracionTotal) {
        fase = "El avión está en la fase de aterrizaje.";
    } else {
        fase = "El avión ya completó el vuelo.";
    }

    const horas = Math.floor(duracionTotal / 60);
    const minutos = Math.floor(duracionTotal % 60);
    const segundos = Math.round((duracionTotal * 60) % 60);

    return `
        <b>Resultados:</b><br>
        ${fase}<br>
        La duración total del vuelo es:<br>
        ${horas} horas, ${minutos} minutos y ${segundos} segundos.
    `;
}

function LimpiarFormularioApp07() {
    document.getElementById('formApp07').reset();
    const resultadoDiv = document.getElementById('ResultadoApp07');
    resultadoDiv.style.display = "none";
}