console.log(`fm-vue.js loaded (${Math.round(performance.now())})`);

window.vm = new Vue({
    name: 'app-product-list',
    el: '#js_app-product-list',
    data: {
        products: {}
    },
    created() {
        console.log(this.$options.name + `: created (${Math.round(performance.now())})`);
    },
    mounted() {
        console.log(this.$options.name + `: mounted (${Math.round(performance.now())})`);
    }
});

document.addEventListener('DOMContentLoaded', event => {
    console.log(`fm-vue.js event: ${event.type} (${Math.round(performance.now())})`);
});

window.addEventListener('load', event => {
    console.log(`fm-vue.js event: ${event.type} (${Math.round(performance.now())})`);
});