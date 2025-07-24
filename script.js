const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    projects.forEach(project => {
      project.style.display = category === 'all' || project.dataset.category === category ? 'block' : 'none';
    });
  });
});
