// Seleziona tutte le immagini con la classe "imgIniziale"
let immagini = document.querySelectorAll(".imgIniziale");

// Per ogni immagine trovata, aggiunge un listener per il click
immagini.forEach(img => {
    img.addEventListener("click", () => {
        // Quando si clicca sull'immagine, reindirizza l'utente alla pagina "Selezione.html"
        window.location.href = "Selezione.html";
    });
});
