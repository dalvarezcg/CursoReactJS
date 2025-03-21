const notas = [
    { nombre: "nota 1" },
    { nombre: "nota 2" }
];

const notesContainer = document.getElementById("notesContainer");

function renderNotas() {
notesContainer.innerHTML = ""; // Limpiar antes de volver a renderizar
notas.forEach((nota, index) => {
    const noteDiv = document.createElement("div");//crea un div
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
        <span>${nota.nombre}</span>
        <button onclick="deleteNote(${index})"><i class="bi bi-trash3"></i></button>
    `;
    notesContainer.appendChild(noteDiv);
});
}

function addNote()
{
    event.preventDefault() // Prevenir la recarga de la página
    var datosNota = document.getElementById('noteInput').value;
    notas.push({ nombre: datosNota});
    noteInput.value = "";
    renderNotas();
}

// Eliminar nota
function deleteNote(index) {
    notas.splice(index, 1);
    renderNotas();
}
renderNotas();
