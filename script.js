// Sword Art Online Portfolio - Script

console.log("SAO Portfolio Script Loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // --- Lógica del Menú Desplegable ---
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const menuItemsList = document.getElementById('sao-menu-items');

    if (menuToggleButton && menuItemsList) {
        menuToggleButton.addEventListener('click', () => {
            menuItemsList.classList.toggle('menu-active');
        });
    }

    // --- Lógica de Scroll Suave ---
    const menuLinks = document.querySelectorAll('#sao-menu-items a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (menuItemsList && menuItemsList.classList.contains('menu-active')) {
                menuItemsList.classList.remove('menu-active');
            }

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Lógica de Skills en Órbita (Automática al hacer Scroll) ---
    const skillsSection = document.getElementById('skills'); // El elemento a "observar"
    const orbitingSkillsContainer = document.getElementById('orbiting-skills-container');
    const skillItems = document.querySelectorAll('#orbiting-skills-container .skill-item');

    if (skillsSection && orbitingSkillsContainer && skillItems.length > 0) {

        const animateSkills = () => {
            const numSkills = skillItems.length;
            const radius = 180; // Radio de la órbita en píxeles
            const angleIncrement = (2 * Math.PI) / numSkills;

            orbitingSkillsContainer.classList.add('orbit-active'); // Activa la visibilidad en CSS

            skillItems.forEach((item, index) => {
                const angle = index * angleIncrement - (Math.PI / 2); // Empezar desde arriba
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                // Aplicar la posición final y la opacidad para que la transición CSS se active
                item.style.setProperty('--skill-transform-final', `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1)`);
                item.style.transitionDelay = `${index * 0.08}s`; // Delay escalonado
            });
        };

        // Configuración del Intersection Observer
        const observerOptions = {
            root: null, // Observa la ventana del navegador (viewport)
            rootMargin: '0px',
            threshold: 0.3 // Se activa cuando el 30% de la sección es visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Si la sección de skills está entrando en la vista...
                if (entry.isIntersecting) {
                    console.log("Sección de Skills visible, activando animación...");
                    animateSkills(); // Llama a la función para animar
                    observer.unobserve(entry.target); // Deja de observar después de activarse una vez
                }
            });
        }, observerOptions);

        // Poner al observer a "observar" la sección de skills
        observer.observe(skillsSection);
    }

}); // Fin de DOMContentLoaded
