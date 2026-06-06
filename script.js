console.log("JS is connected! 🚀");

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  if (current === 'dark') {
    document.body.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙 Dark Mode';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});
