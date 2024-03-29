const mapImage = document.getElementById('map-image');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

mapImage.style.transformOrigin = '0 0'; // Set origin to top-left corner

let zoomLevel = 100; // Initial zoom level (adjust as needed)
console.log(zoomLevel)
zoomInButton.addEventListener('click', () => {
    zoomLevel = Math.min(zoomLevel + 20, 160); // Limit zoom to 100%
    mapImage.style.transform = `scale(${zoomLevel}%)`
    console.log(zoomLevel);
});

zoomOutButton.addEventListener('click', () => {
    zoomLevel = Math.max(zoomLevel - 20, 100); // Limit zoom to 100%
    mapImage.style.transform = `scale(${zoomLevel}%)`
    console.log(zoomLevel);
});

// 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'