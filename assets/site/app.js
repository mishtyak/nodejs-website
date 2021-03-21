window.Vue = require('vue');

console.log(`app.js loaded (${Math.round(performance.now())})`);

window.viewport = document.documentElement.clientWidth;

window.ObserverConstructor = function (init_selector, callback, options) {
    options = options || {};
    callback = callback || function () {
    };

    let observer_options = {
        threshold: 0
    };

    Object.assign(observer_options, options);

    let observer = new IntersectionObserver(callback, observer_options);

    this.disconnect = () => observer.disconnect();

    this.observe = selector => {
        selector = selector || init_selector;

        if (typeof selector === 'object')
            observer.observe(selector);
        else
            [].forEach.call(document.querySelectorAll(selector), item => observer.observe(item));
    };

    this.unobserve = item => observer.unobserve(item);
};

window.observers = {};

observers.img_lazy = new ObserverConstructor('.js_img-lazy', (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        let el = entry.target;

        observer.unobserve(el);

        requestAnimationFrame(() => {
            let src = el.dataset.src,
                bg = el.dataset.bg;

            el.classList.add('img-lazy_intersecting');
            el.classList.remove('js_img-lazy');

            if (src) {
                el.src = src;
                el.onload = () => el.classList.add('img-lazy_loaded');
            }

            if (bg) {
                el.style.backgroundImage = bg;
                el.classList.add('img-lazy_bg');
            }
        });
    });
})

document.addEventListener('DOMContentLoaded', event => {
    console.log(`app.js event: ${event.type} (${Math.round(performance.now())})`);

    observers.img_lazy.observe();

    if (viewport > 767.98) {
        let els_product_card_box_hover = [].slice.call(document.querySelectorAll('.js_product-card__box_hover'));

        els_product_card_box_hover.forEach(el => {
            el.addEventListener('mouseenter', event => {
                event.target.style.height = getComputedStyle(event.target).height;
                event.target.classList.add('product-card__box_hover');
            });

            el.addEventListener('mouseleave', event => {
                event.target.classList.remove('product-card__box_hover');
                event.target.style.height = '';
            });
        });
    }
});

window.addEventListener('load', event => {
    console.log(`app.js event: ${event.type} (${Math.round(performance.now())})`);
});