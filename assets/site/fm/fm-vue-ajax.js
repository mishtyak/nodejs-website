import vProduct from '../../vue-components/product';

console.log(`fm-vue-ajax.js loaded (${Math.round(performance.now())})`);

Vue.directive('img-lazy', {
    bind(el) {
        observers.img_lazy.observe(el);
    }
});

window.vm = new Vue({
    name: 'app-product-list',
    el: '#js_app-product-list',
    components: {
        vProduct
    },
    data: {
        products: {}
    },
    methods: {
        get_products() {
            console.log(`fm-vue-ajax.js get_products (${Math.round(performance.now())})`);

            fetch('/api/products', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => this.products = data)
                .catch(err => console.log(err))
                .then(() => console.log(`fm-vue-ajax.js get_products finish (${Math.round(performance.now())})`));
        }
    },
    created() {
        console.log(this.$options.name + `: created (${Math.round(performance.now())})`);

        this.get_products();
    },
    mounted() {
        console.log(this.$options.name + `: mounted (${Math.round(performance.now())})`);
    }
});

document.addEventListener('DOMContentLoaded', event => {
    console.log(`fm-vue-ajax.js event: ${event.type} (${Math.round(performance.now())})`);
});

window.addEventListener('load', event => {
    console.log(`fm-vue-ajax.js event: ${event.type} (${Math.round(performance.now())})`);
});