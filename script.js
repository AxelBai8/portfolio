// Sword Art Online Portfolio - Script

document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('cyberpunk-name');
  const names = ["Axel Bailleres", "アクセル・バイエレス"];
  let currentIndex = 0;
  let currentText = nameElement.textContent;

  function switchName() {
    const targetName = names[currentIndex];
    currentText = nameElement.textContent;

    // Borra letra por letra (desde el final)
    const deleteInterval = setInterval(() => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1); // Elimina la última letra
        nameElement.textContent = currentText;
      } else {
        clearInterval(deleteInterval);
        // Escribe el nuevo nombre letra por letra
        writeName(targetName);
      }
    }, 100); // Velocidad de borrado (ms)
  }

  function writeName(name) {
    let i = 0;
    currentText = ''; // Reinicia el texto
    const writeInterval = setInterval(() => {
      if (i < name.length) {
        currentText += name[i];
        nameElement.textContent = currentText;
        i++;
      } else {
        clearInterval(writeInterval);
        currentIndex = (currentIndex + 1) % names.length;
        setTimeout(switchName, 2000); // Espera antes de repetir
      }
    }, 150); // Velocidad de escritura (ms)
  }

  // Inicia el ciclo después de 2 segundos
  setTimeout(switchName, 2000);
});
 // Fin de DOMContentLoaded
