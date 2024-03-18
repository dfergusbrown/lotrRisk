const mapImage = document.getElementById('map-image');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

let zoomLevel = 100; // Initial zoom level (adjust as needed)

zoomInButton.addEventListener('click', () => {
  zoomLevel += 30; // Adjust zoom increment value
  mapImage.style.transform = `scale(${zoomLevel}%)`;
});

zoomOutButton.addEventListener('click', () => {
  zoomLevel -= 30;
  mapImage.style.transform = `scale(${zoomLevel}%)`;
});
