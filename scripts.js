// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeToggleBtn.textContent = '🌞'; // Change to Sun for Light Mode
    } else {
        themeToggleBtn.textContent = '🌙'; // Change to Moon for Dark Mode
    }
});

// Open Modal on Project Click
function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Example dynamic content for modal
    if (projectId === 1) {
        modalContent.innerHTML = '<h3>Project 1</h3><p>This is a detailed description of project 1.</p>';
    } else if (projectId === 2) {
        modalContent.innerHTML = '<h3>Project 2</h3><p>This is a detailed description of project 2.</p>';
    }

    modal.style.display = 'block';
}

// Close Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
});
