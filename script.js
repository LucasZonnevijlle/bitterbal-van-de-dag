document.addEventListener("DOMContentLoaded", function () {
    fetch('images/images.json')
        .then(response => response.json())
        .then(images => {
            if (images.length === 0) {
                console.error("Geen afbeeldingen gevonden!");
                return;
            }

            // Willekeurig een afbeelding kiezen
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            document.getElementById("bitterbalImage").src = `images/${randomImage}`;
        })
        .catch(error => console.error("Fout bij het ophalen van afbeeldingen:", error));

    // Optionele leuke bitterbal-quote
    const quotes = [
        "Een dag zonder bitterbal is een dag niet geleefd!",
        "Bitterballen: de enige reden waarom mensen feesten.",
        "Deze bitterbal is speciaal voor jou! 🧆",
        "Knapperig van buiten, smeuïg van binnen. Perfectie!",
        "Team mayonaise of team mosterd?"
    ];
    const today = new Date().getDate();
    document.getElementById("quote").innerText = quotes[today % quotes.length];
});
