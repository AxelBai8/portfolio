// Sword Art Online Portfolio - Script

console.log("SAO Portfolio Script Loaded!");

      document.addEventListener('DOMContentLoaded', () => {
      const nameElement = document.getElementById('cyberpunk-name');
      const names = ["Axel Bailleres", "アクセル・バイエレス"];
      let currentIndex = 0;

      setInterval(() => {
        currentIndex = (currentIndex + 1) % names.length;
        nameElement.textContent = names[currentIndex];
        nameElement.classList.add('glitch-effect');
        setTimeout(() => nameElement.classList.remove('glitch-effect'), 300);
      }, 3000);
    });
 // Fin de DOMContentLoaded
