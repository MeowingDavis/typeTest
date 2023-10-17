const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth > 700 ? 700 : window.innerWidth;
    canvas.height = canvas.width * 0.75; // Set the aspect ratio you desire (e.g., 4:3)
    draw(); // Call a function to redraw content if needed
}

function draw() {
    // Add your drawing logic here
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);
