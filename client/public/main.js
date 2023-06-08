const toggleButton = document.querySelector('.toggle input[type="checkbox"]');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
