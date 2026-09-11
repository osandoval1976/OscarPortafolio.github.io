// JavaScript to track unique profile hits on GitHub Pages
const countElement = document.querySelector('.stat-count');

// We use your GitHub username as a namespace key to keep your count unique
const namespace = "oscarportafolio-github-io";

fetch(`https://count.cab{namespace}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // The API returns the incremented count inside a 'count' variable
    countElement.textContent = data.count;
  })
  .catch(error => {
    console.error('Error al cargar el contador:', error);
    // Fallback so the user doesn't just see a placeholder "0" if an API spikes
    countElement.textContent = "1+"; 
  });

