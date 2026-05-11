// 1. Seleccionamos el botón del DOM
const themeToggle = document.getElementById('theme-toggle');

// 2. Función para cargar el tema guardado al abrir la web
const loadSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme'); // Cargamos del localStorage
    
    // Si el tema guardado es 'light', aplicamos la clase al body
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerText = 'MODO OSCURO'; // Cambiamos el texto del botón
    } else {
        themeToggle.innerText = 'MODO CLARO';
    }
};

// Ejecutamos la carga inicial
loadSavedTheme();

// 3. Gestión del evento Click para el cambio de tema
themeToggle.addEventListener('click', () => {
    // Alternar la clase 'light-mode' en el body
    document.body.classList.toggle('light-mode');
    
    // Comprobar si ahora el modo es claro u oscuro
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        // Almacenar el tema seleccionado en localStorage
        localStorage.setItem('theme', 'light');
        themeToggle.innerText = 'MODO OSCURO';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerText = 'MODO CLARO';
    }
});