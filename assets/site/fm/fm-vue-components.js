import vProduct from '../../vue-components/product';

console.log(`fm-vue-components.js loaded (${Math.round(performance.now())})`);

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
    created() {
        console.log(this.$options.name + `: created (${Math.round(performance.now())})`);

        let input_products_data = document.getElementById('js_products-data');

        if (input_products_data)
            this.products = JSON.parse(input_products_data.value);
    },
    mounted() {
        console.log(this.$options.name + `: mounted (${Math.round(performance.now())})`);
    }
});

document.addEventListener('DOMContentLoaded', event => {
    console.log(`fm-vue-components.js event: ${event.type} (${Math.round(performance.now())})`);
});

window.addEventListener('load', event => {
    console.log(`fm-vue-components.js event: ${event.type} (${Math.round(performance.now())})`);
});