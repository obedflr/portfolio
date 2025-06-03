const botonIdiomas = document.getElementById("btnIdioma");
const CVENGLISH = document.getElementById("CVEnglish");
const CVSPANISH = document.getElementById("CVSpanish");
 
botonIdiomas.addEventListener("click", function() {
    if (CVENGLISH.style.display === "none") {
        CVENGLISH.style.display = "block";
        CVSPANISH.style.display = "none";
    } else {
        CVENGLISH.style.display = "none";
        CVSPANISH.style.display = "block";
    }
});