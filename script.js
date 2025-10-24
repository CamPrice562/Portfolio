// Simple dark mode toggle to demonstrate JS skills
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Switch icon
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update button icon and save preference
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});
