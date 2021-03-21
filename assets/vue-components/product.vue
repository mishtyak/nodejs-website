<template>
    <div class="product-card-box" itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'>
        <meta itemprop='position' content='0'>

        <div class="product-card" itemscope itemtype='http://schema.org/Product'>
            <a class="product-card__img-link" :href="product.url" href=product.url itemprop='url'>
                <img v-if="product.img"
                     class="product-card__img"
                     src="/img/empty.gif"
                     v-img-lazy
                     :data-src="product.img"
                     :alt="product.product_name"
                     width="270"
                     height="270">

                <img v-else class="product-card__img" src="/img/empty.gif" alt="" width="270" height="270">
            </a>

            <div class="product-card__tag-box">
                <span v-if="product.is_product_of_day" class="product-card__tag bg-danger">Букет дня</span>
                <span v-if="product.is_popular" class="product-card__tag bg-warning">Хит продаж</span>
                <span v-if="product.is_new" class="product-card__tag bg-danger">Новинка</span>
                <span v-if="product.discount" class="product-card__tag bg-success">Скидка</span>
            </div>

            <div class="product-card__btn-favorite"
                 :class="{'active js-remove-favorite': product.in_wishlist, 'js-add-favorite': !product.in_wishlist}"
                 :data-url="'/api/wishlist?product=' + product.id + '&partner=' + (product.partner ? product.partner.id : '') + '&type=' + product.type">
                <img class='svg-heart d-block' src='/img/empty.gif' data-src='/img/heart.svg' width='21' height='20' alt='' v-img-lazy>
            </div>

            <div class="product-card__seller-box">
                <a v-if="product.partner" class="product-card__seller" :href="product.partner.slug ? '/partner/' + product.partner.slug : '#'">
                    <img v-if="product.partner.avatar && product.partner.avatar.small_image" class="product-card__seller-avatar" src="/img/empty.gif"
                         :data-src="product.partner.avatar.small_image"
                         width="40"
                         height="40"
                         alt=""
                         v-img-lazy>

                    <div class="product-card__seller-name">{{ product.partner.localized_partner_name }}</div>
                </a>

                <div class="product-card__cost-delivery">
                    <img class='product-card__cost-delivery-img' src='/img/empty.gif' data-src='/img/delivery.svg' width='13' height='9' alt='' v-img-lazy>

                    <div>Бесплатно{{ product.delivery_term ? ', ' + product.delivery_term : '' }}</div>
                </div>
            </div>

            <div class="product-card__title-box">
                <a class="product-card__title" :href="product.url">{{ product.product_name }}</a>

                <div v-if="product.price" class="flex-grow-1 product-card__price">
                    <span>{{ product.price_format }}</span>

                    <meta itemprop='priceCurrency' :content='product.currency'>

                    <div v-if="product.discount" class="product-card__price-old">{{ format_price(product.full_price, 'ru', product.currency) }}</div>
                </div>
            </div>

            <div v-if="product.width || product.height"
                 class="product-card__size collapse">{{ product.width || '' }} {{ product.width && product.height ? 'х' : '' }} {{ product.height || '' }} см
            </div>

            <div v-if="product.items && product.items.length" class="product-card__descr collapse">
                <div v-for="item in product.items">{{ item.name }}
                    <span v-if="item.refs_item_type_id === 1"> — {{ Math.round(item.count) }}</span>
                </div>
            </div>

            <a class="btn btn-block collapse" :href="product.url">Заказать</a>

            <button type='button' class='product-card__btn-one-click collapse'>Купить в 1 клие</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'product',
    props: {
        data: {
            type: Object,
            default: () => {
            }
        }
    },
    computed: {
        product() {
            let data = this.data;

            data.img = data.images && data.images[0] ? data.images[0].medium_image : null;
            data.price_format = this.format_price(data.price, 'ru', data.currency);

            return data;
        }
    },
    methods: {
        format_price(price, local, currency) {
            return price.toLocaleString(local, {style: 'currency', currency, minimumFractionDigits: 0});
        }
    },
    mounted() {
        if (viewport > 767.98) {
            this.$el.addEventListener('mouseenter', function () {
                this.style.height = getComputedStyle(this).height;
                this.classList.add('product-card__box_hover');
            });

            this.$el.addEventListener('mouseleave', function () {
                this.classList.remove('product-card__box_hover');
                this.style.height = 'auto';
            });
        }
    }
}
</script>