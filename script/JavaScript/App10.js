function GetApp10() {
    let FechaNacimiento = new Date(document.getElementById('FechaNacimiento').value);

    if (!isNaN(FechaNacimiento)) {
        document.getElementById('ResultadoApp10').innerHTML = calculateAge(FechaNacimiento);
    } else {
        document.getElementById('ResultadoApp10').innerHTML = "Por favor, ingrese una fecha válida.";
    }
}

function calculateAge(FechaNacimiento) {
    const today = new Date();

    const ageInMilliseconds = today - FechaNacimiento;
    const ageInYears = Math.trunc(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const ageInMonths = Math.floor(ageInDays / 30.44); // Asumiendo 30.44 días por mes

    return `<b>La edad es:</b> ${ageInYears} años, ${ageInMonths} meses, ${ageInDays} días <br>`;
}