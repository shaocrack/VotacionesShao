function handleYesClick() {
    alert("Sabía que dirías que sí, llámame 💖");
}

function handleNoClick() {
    alert("Usted ha presionado 'Sí', buena elección 😉");
    let noButton = document.querySelector(".no-button");
    noButton.textContent = "Sí";
    noButton.onclick = handleYesClick; // Ahora actúa como el botón "Sí"
    noButton.classList.add("yes-button"); // Cambiar estilo a similar al botón "Sí"
    noButton.classList.remove("no-button"); // Eliminar la clase "no-button"
    noButton.style.backgroundColor = " #ff4d79"; // Cambiar color de fondo a verde
    noButton.style.color = "#ffffff"; // Cambiar color del texto a blanco
}
// Mostrar "SHAOPRO" después de 5 segundos
setTimeout(() => {
    document.getElementById("shaopro").style.display = "block";
}, 5000);