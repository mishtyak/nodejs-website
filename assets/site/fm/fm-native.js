console.log(`fm-native.js loaded (${Math.round(performance.now())})`);

document.addEventListener('DOMContentLoaded', event => {
    console.log(`fm-native.js event: ${event.type} (${Math.round(performance.now())})`);
});

window.addEventListener('load', event => {
    console.log(`fm-native.js event: ${event.type} (${Math.round(performance.now())})`);
});