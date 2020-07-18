console.log(`app.js loaded (${Math.round(performance.now())})`);

document.addEventListener('DOMContentLoaded', event => {
    console.log(`app.js event: ${event.type} (${Math.round(performance.now())})`);
});