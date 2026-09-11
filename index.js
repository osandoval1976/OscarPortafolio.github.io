// JavaScript con API externa de ejemplo
const countElement = document.querySelector('.stat-count');

fetch('https://countapi.xyz')
  .then(response => response.json())
  .then(data => {
    countElement.textContent = data.value;
  })
  .catch(error => console.error('Error al cargar el contador:', error));
