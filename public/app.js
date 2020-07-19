console.log(`app.js loaded (${Math.round(performance.now())})`);

document.addEventListener('DOMContentLoaded', event => {
    console.log(`app.js event: ${event.type} (${Math.round(performance.now())})`);

    [].forEach.call(document.querySelectorAll('.js_btn-pwa-install'), item => {
        item.addEventListener('click', event => {
            console.log('btn-pwa-install. Event: click');

            if (!deferred_prompt) return;

            deferred_prompt.prompt();

            deferred_prompt.userChoice.then(result => {
                console.log('userChoice: ', result);

                if (result.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }

                window.deferred_prompt = null;
                event.target.hidden = true;
            });
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', event => {
        console.log(`event: ${event.type} (${Math.round(performance.now())})`);

        navigator.serviceWorker
            .register('/sw.js')
            .then(reg => console.log(`[Service Worker] Registration (${Math.round(performance.now())})`))
            .catch(err => console.log('err: ', err));
    });
}

window.addEventListener('beforeinstallprompt', event => {
    console.log('beforeinstallprompt: ', event);

    event.preventDefault();
    window.deferred_prompt = event;
    [].forEach.call(document.querySelectorAll('.js_btn-pwa-install'), item => item.hidden = false);
});

window.addEventListener('appinstalled', event => console.log('appinstalled', event));