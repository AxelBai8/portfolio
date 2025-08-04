// Sword Art Online Portfolio - Script

console.log("SAO Portfolio Script Loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('cyberpunk-name');
  const names = ["Axel Bailleres", "アクセル・バイエレス"]; // Versión en japonés (katakana)
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % names.length;
    nameElement.textContent = names[currentIndex];
    
    // Añade un efecto de glitch al cambiar
    nameElement.style.animation = 'glitch 0.3s linear';
    setTimeout(() => {
      nameElement.style.animation = '';
    }, 300);
  }, 3000); // Cambia cada 3 segundos
});

}); // Fin de DOMContentLoaded
