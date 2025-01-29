document.addEventListener("DOMContentLoaded", () => {
    // Array con los nombres de los módulos
    const modulos = [
        "ViewApp01.html",
        "ViewApp02.html",
        "ViewApp03.html",
        "ViewApp04.html",
        "ViewApp05.html",
        "ViewApp06.html",
        "ViewApp07.html",
        "ViewApp08.html",
        "ViewApp09.html",
        "ViewApp10.html",
        "ViewApp11.html",
        "ViewApp12.html",
        "ViewApp13.html",
        "ViewApp14.html",
        "ViewApp15.html",
        "ViewApp16.html",
        "ViewApp17.html",
        "ViewApp18.html"
    ];

    const container = document.getElementById("modulos-container");

    modulos.forEach(modulo => {
        fetch(`views/${modulo}`)
            .then(response => response.text())
            .then(html => {
                container.innerHTML += html;
            })
            .catch(error => console.error(`Error al cargar ${modulo}:`, error));
    });
});
