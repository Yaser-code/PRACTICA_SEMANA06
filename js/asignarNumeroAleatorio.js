// Obtener todos los <td> de la página
const celdas = document.querySelectorAll("td");

// Recorremos cada celda y le asignamos un número aleatorio
celdas.forEach(celda => {
    const numeroAleatorio = Math.floor(Math.random() * 100); // Número entre 0 y 99
    celda.textContent = "Numero: " + numeroAleatorio;
});
