const cambiarTraduccion = document.getElementById("btnIdioma");
 
 
let translations = {};
let idiomaActual = "es";
 
fetch('translations/translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        setLanguage('es');
    });
 
function updateTexts(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(key => {
        const el = document.getElementById(key);
        if (el) el.textContent = translations[lang][key];
    });
}
 
function setLanguage(lang) {
    idiomaActual = lang;
    if (!translations[lang]) return;
    updateTexts(lang);
}
 
cambiarTraduccion.addEventListener("click", ()=>{
    if(idiomaActual==="es"){
        setLanguage("en");
 
    }else setLanguage("es")
});