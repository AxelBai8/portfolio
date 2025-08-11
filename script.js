// Sword Art Online Portfolio 
document.addEventListener('DOMContentLoaded', function() {
  // =============================================
  //  Name Effect
  // =============================================
  try {
    const nameElement = document.getElementById('cyberpunk-name');
    
    if (nameElement) {
      const names = ["Axel Bailleres", "アクセル・バイエレス"];
      let currentIndex = 0;
      let currentText = nameElement.textContent;
      let nameAnimationIntervals = [];

      function clearNameIntervals() {
        nameAnimationIntervals.forEach(interval => clearInterval(interval));
        
        nameAnimationIntervals = [];
      }

      function switchName() {
        clearNameIntervals();
        const targetName = names[currentIndex];
        currentText = nameElement.textContent;

        // Borrado letra por letra
        const deleteInterval = setInterval(() => {
          if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            nameElement.textContent = currentText;
          } else {
            clearInterval(deleteInterval);
            writeName(targetName);
          }
        }, 100);
        
        nameAnimationIntervals.push(deleteInterval);
      }

      function writeName(name) {
        let i = 0;
        currentText = '';
        const writeInterval = setInterval(() => {
          if (i < name.length) {
            currentText += name[i];
            nameElement.textContent = currentText;
            i++;
          } else {
            clearInterval(writeInterval);
            currentIndex = (currentIndex + 1) % names.length;
            setTimeout(switchName, 2000);
          }
        }, 150);
        
        nameAnimationIntervals.push(writeInterval);
      }

      setTimeout(switchName, 2000);
      window.addEventListener('beforeunload', clearNameIntervals);
    }
  } catch (error) {
    console.error('Error en animación de nombre:', error);
  }

  // =============================================
  // Scroll Animation
  // =============================================

  try {
    const animatedElements = document.querySelectorAll('.hidden-for-animation');
    
    if (animatedElements.length > 0) {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
          } else {
            entry.target.classList.add('animate-out');
            entry.target.classList.remove('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      animatedElements.forEach(el => scrollObserver.observe(el));
    }
  } catch (error) {
    console.error('Error en animaciones de scroll:', error);
  }

    // =============================================
  // Gmail Icon Click -> Show Email Form
  // =============================================

  try {
    const gmailIcon = document.getElementById('gmail-icon');
    const formContainer = document.getElementById('gmail-form-container');

    if (gmailIcon && formContainer) {
      gmailIcon.addEventListener('click', () => {
        // Alterna visibilidad del formulario
        const isVisible = formContainer.style.display === 'block';
        formContainer.style.display = isVisible ? 'none' : 'block';
      });
    }
  } catch (error) {
    console.error('Error al mostrar el formulario de correo:', error);
  }

});