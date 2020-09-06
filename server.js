const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const path = require('path')
const config = require('./config');
const log = require('./libs/winston')(module);

const server = express();

server.engine('ejs', require('ejs-mate'));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(compression());

server.use(serveStatic(path.join(__dirname, 'public'), {
    maxAge: '1d',
    setHeaders(res, path) {
        if (serveStatic.mime.lookup(path) === 'text/html')
            res.setHeader('Cache-Control', 'no-cache, private')
    }
}));

server.get('/', (req, res) => {
    res.render('index', {
        data: {
            h1: 'Hello!',
        }
    });
});

server.get('/flomarket', ((req, res) => {
    res.render('flomarket', {
        products: [
            {
                category: {
                    id: 4, name: {
                        de: "Desserts",
                        en: "Desserts",
                        es: null,
                        fr: null,
                        ru: "Сладости",
                        uk: null
                    }
                },
                currency: "RUB",
                discount: 0,
                full_price: 850,
                height: 81,
                id: 4617,
                images: [{
                    id: 11340,
                    user_id: 1296,
                    type: "image",
                    is_main: false,
                    original_name: "phpE0POSU"
                }],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{
                    name: "Шар гелиевый",
                    refs_item_type_id: 9,
                    count: "1.00"
                }],
                partner: {
                    slug: "vornikovbouquets",
                    localized_partner_name: "Vornikovbouquets"
                },
                price: 850,
                product_name: "Шар фольгированный",
                slug: "shar-folgirovannyy",
                slug_ru: "shar-folgirovannyy",
                url: "/sladost/shar-folgirovannyy",
                width: 40
            },
            {
                category: {id: 6},
                currency: "RUB",
                discount: 0,
                full_price: 1180,
                height: 0,
                id: 2718,
                images: [{id: 7506, user_id: 1, type: "image", is_main: false, original_name: "phpcSTZQC"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Драцена", refs_item_type_id: 8, count: "1.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1180,
                product_name: "Драцена",
                slug: "dratsena-2718",
                slug_ru: "dratsena-2718",
                url: "/gorshechnie/dratsena-2718",
                width: 0
            },
            {
                category: {id: 4, name: {de: "Desserts", en: "Desserts", es: null, fr: null, ru: "Сладости", uk: null}},
                currency: "RUB",
                discount: 0,
                full_price: 1380,
                height: 15,
                id: 5178,
                images: [{id: 12728, user_id: 714, type: "image", is_main: true, original_name: "phpRjMNB5"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Роза", refs_item_type_id: 1, count: "1.00"}],
                partner: {slug: "bigflowers", localized_partner_name: "BigFlowers"},
                price: 1380,
                product_name: "Клубники в коробке в форме сердце",
                slug: "klubniki-v-korobke-v-forme-serdtse",
                slug_ru: "klubniki-v-korobke-v-forme-serdtse",
                url: "/sladost/klubniki-v-korobke-v-forme-serdtse",
                width: 20
            },
            {
                category: {id: 4, name: {de: "Desserts", en: "Desserts", es: null, fr: null, ru: "Сладости", uk: null}},
                currency: "RUB",
                discount: 0,
                full_price: 1400,
                height: 5,
                id: 4976,
                images: [{id: 12235, user_id: 1030, type: "image", is_main: false, original_name: "phpfHaZx9"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Капкейки", refs_item_type_id: 11, count: "4.00"}],
                partner: {slug: "mycvety", localized_partner_name: "mycvety"},
                price: 1400,
                product_name: "Набор капкейков",
                slug: "nabor-kapkeykov",
                slug_ru: "nabor-kapkeykov",
                url: "/sladost/nabor-kapkeykov",
                width: 5
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1500,
                height: 42,
                id: 4777,
                images: [{id: 11766, user_id: 1030, type: "image", is_main: false, original_name: "phpuhuW1J"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Хризантема кустовая", refs_item_type_id: 1, count: "5.00"}],
                partner: {slug: "mycvety", localized_partner_name: "mycvety"},
                price: 1500,
                product_name: "Букет  «5 хризантем в крафте»",
                slug: "5-khrizantem-v-krafte",
                slug_ru: "5-khrizantem-v-krafte",
                url: "/buket/5-khrizantem-v-krafte",
                width: 28
            },
            {
                category: {id: 3, name: {de: "Geschenke", en: "Gifts", ru: "Подарки"}},
                currency: "RUB",
                discount: 0,
                full_price: 1590,
                height: 13,
                id: 3700,
                images: [{id: 9301, user_id: 1244, type: "image", is_main: false, original_name: "phpV1CfFK"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Сувенир", refs_item_type_id: 9, count: "1.00"}],
                partner: {slug: "studiya-tsvetov-la-rose-moskva", localized_partner_name: "Студия цветов La Rose_Москва"},
                price: 1590,
                product_name: "Лошадка",
                slug: "loshadka",
                slug_ru: "loshadka",
                url: "/podarok/loshadka",
                width: 19
            },
            {
                category: {id: 4, name: {de: "Desserts", en: "Desserts", es: null, fr: null, ru: "Сладости", uk: null}},
                currency: "RUB",
                discount: 0,
                full_price: 1620,
                height: 0,
                id: 3422,
                images: [{id: 8756, user_id: 1213, type: "image", is_main: false, original_name: "phpa8Yb7x"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Набор пирожных", refs_item_type_id: 11, count: "1.00"}],
                partner: {slug: "polinapastry", localized_partner_name: "Polinapastry"},
                price: 1620,
                product_name: "Мини картошка",
                slug: "mini-kartoshka",
                slug_ru: "mini-kartoshka",
                url: "/sladost/mini-kartoshka",
                width: 0
            },
            {
                category: {id: 3, name: {de: "Geschenke", en: "Gifts", ru: "Подарки"}},
                currency: "RUB",
                discount: 0,
                full_price: 1670,
                height: 0,
                id: 771,
                images: [{id: 2437, user_id: 1, type: "image", is_main: true}],
                in_wishlist: false,
                is_new: false,
                is_popular: true,
                is_product_of_day: false,
                items: [{name: "Вкусный торт", refs_item_type_id: 11, count: "1.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1670,
                product_name: "Вкусный торт",
                slug: "vkusnyy-tort",
                slug_ru: "vkusnyy-tort",
                url: "/podarok/vkusnyy-tort",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1700,
                height: 30,
                id: 4075,
                images: [{id: 10030, user_id: 1319, type: "image", is_main: true, original_name: "phpOtgqcl"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Василёк ( сухоцвет )", refs_item_type_id: 1, count: "1.00"}],
                partner: {slug: "lavka-chudes", localized_partner_name: "Лавка чудес", avatar: null},
                price: 1700,
                product_name: "Букет  «Васильки»",
                slug: "vasilki",
                slug_ru: "vasilki",
                url: "/buket/vasilki",
                width: 15
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1740,
                height: 0,
                id: 46,
                images: [{id: 2153, user_id: null, type: "image", is_main: false, original_name: "384"}],
                in_wishlist: false,
                is_new: false,
                is_popular: true,
                is_product_of_day: true,
                items: [{name: "Роза красная 50см", refs_item_type_id: 1, count: "11.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1740,
                product_name: "Букет из 11 красных роз",
                slug: "buket-iz-11-krasnykh-roz",
                slug_ru: "buket-iz-11-krasnykh-roz",
                url: "/buket/buket-iz-11-krasnykh-roz",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1740,
                height: 0,
                id: 52,
                images: [{id: 2158, user_id: null, type: "image", is_main: false, original_name: "390"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Роза белая 50см", refs_item_type_id: 1, count: "11.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1740,
                product_name: "Букет из 11 белых роз",
                slug: "buket-iz-11-belykh-roz",
                slug_ru: "buket-iz-11-belykh-roz",
                url: "/buket/buket-iz-11-belykh-roz",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1740,
                height: 0,
                id: 67,
                images: [{id: 2172, user_id: null, type: "image", is_main: false, original_name: "407"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Роза розовая 50см", refs_item_type_id: 1, count: "11.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1740,
                product_name: "Букет из 11 розовых роз",
                slug: "buket-iz-11-rozovykh-roz",
                slug_ru: "buket-iz-11-rozovykh-roz",
                url: "/buket/buket-iz-11-rozovykh-roz",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1740,
                height: 0,
                id: 88,
                images: [{id: 2188, user_id: null, type: "image", is_main: false, original_name: "437"}],
                in_wishlist: false,
                is_new: false,
                is_popular: true,
                is_product_of_day: false,
                items: [{name: "Роза разноцветная 50см", refs_item_type_id: 1, count: "11.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1740,
                product_name: "Букет из 11 разноцветных роз",
                slug: "buket-iz-11-raznotsvetnykh-roz",
                slug_ru: "buket-iz-11-raznotsvetnykh-roz",
                url: "/buket/buket-iz-11-raznotsvetnykh-roz",
                width: 0
            },
            {
                category: {id: 4, name: {de: "Desserts", en: "Desserts", es: null, fr: null, ru: "Сладости", uk: null}},
                currency: "RUB",
                discount: 0,
                full_price: 1760,
                height: 0,
                id: 3433,
                images: [{id: 8767, user_id: 1213, type: "image", is_main: false, original_name: "phpC7l9ZX"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Набор макаронс", refs_item_type_id: 11, count: "1.00"}],
                partner: {slug: "polinapastry", localized_partner_name: "Polinapastry"},
                price: 1760,
                product_name: "Тропический набор макаронс",
                slug: "tropicheskiy-nabor-makarons",
                slug_ru: "tropicheskiy-nabor-makarons",
                url: "/sladost/tropicheskiy-nabor-makarons",
                width: 0
            },
            {
                category: {id: 4, name: {de: "Desserts", en: "Desserts", es: null, fr: null, ru: "Сладости", uk: null}},
                currency: "RUB",
                discount: 0,
                full_price: 1770,
                height: 0,
                id: 3434,
                images: [{id: 8768, user_id: 1213, type: "image", is_main: false, original_name: "phpDR6lBx"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Подарочная упаковка", refs_item_type_id: 3, count: "1.00"}],
                partner: {slug: "polinapastry", localized_partner_name: "Polinapastry"},
                price: 1770,
                product_name: "Набор фруктово шоколадный",
                slug: "nabor-fruktovo-shokoladnyy",
                slug_ru: "nabor-fruktovo-shokoladnyy",
                url: "/sladost/nabor-fruktovo-shokoladnyy",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1800,
                height: 35,
                id: 1087,
                images: [{id: 2975, user_id: 716, type: "image", is_main: true, original_name: "phpEiSYxG"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Гортензия", refs_item_type_id: 1, count: "1.00"}],
                partner: {slug: "margaritkashop", localized_partner_name: "Margaritka.shop"},
                price: 1800,
                product_name: "Букет  «См Ама»",
                slug: "sm-ama",
                slug_ru: "sm-ama",
                url: "/buket/sm-ama",
                width: 20
            },
            {
                category: {id: 2, name: {de: "Blumengestecke", en: "Compositions", ru: "Композиции"}},
                currency: "RUB",
                discount: 0,
                full_price: 1800,
                height: 20,
                id: 3037,
                images: [{id: 8120, user_id: 1030, type: "image", is_main: true, original_name: "phpcNHk99"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Кустовая хризантема желтая", refs_item_type_id: 1, count: "5.00"}],
                partner: {slug: "mycvety", localized_partner_name: "mycvety"},
                price: 1800,
                product_name: "Композиция  «Коробочка с хризантемой»",
                slug: "korobochka-s-khrizantemoy",
                slug_ru: "korobochka-s-khrizantemoy",
                url: "/kompoziciya/korobochka-s-khrizantemoy",
                width: 20
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1860,
                height: 40,
                id: 3260,
                images: [{id: 8506, user_id: null, type: "image", is_main: false, original_name: "4249.jpg"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Гвоздика", refs_item_type_id: 1, count: "9.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1860,
                product_name: "Букет  «Dreamy miracle: Pink Carnations»",
                slug: "dreamy-miracle-pink-carnations",
                slug_ru: "dreamy-miracle-pink-carnations",
                url: "/buket/dreamy-miracle-pink-carnations",
                width: 18
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1890,
                height: 50,
                id: 4999,
                images: [{id: 12303, user_id: 714, type: "image", is_main: true, original_name: "phpTKiyne"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Роза 50 см", refs_item_type_id: 1, count: "19.00"}],
                partner: {slug: "bigflowers", localized_partner_name: "BigFlowers"},
                price: 1890,
                product_name: "Букет из 19 роз",
                slug: "buket-iz-19-roz-4999",
                slug_ru: "buket-iz-19-roz-4999",
                url: "/buket/buket-iz-19-roz-4999",
                width: 25
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1890,
                height: 50,
                id: 5008,
                images: [{id: 12329, user_id: 714, type: "image", is_main: true, original_name: "phpHFOUan"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Роза 50 см", refs_item_type_id: 1, count: "19.00"}],
                partner: {slug: "bigflowers", localized_partner_name: "BigFlowers"},
                price: 1890,
                product_name: "Букет из 19 персиковых роз",
                slug: "buket-iz-19-persikovykh-roz",
                slug_ru: "buket-iz-19-persikovykh-roz",
                url: "/buket/buket-iz-19-persikovykh-roz",
                width: 25
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1900,
                height: 45,
                id: 1076,
                images: [{id: 2938, user_id: 716, type: "image", is_main: true, original_name: "phpQ6yykY"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Упаковка (фетр крафт или пленка матовая)", refs_item_type_id: 3, count: "2.00"}],
                partner: {slug: "margaritkashop", localized_partner_name: "Margaritka.shop"},
                price: 1900,
                product_name: "Букет  «Гуашь»",
                slug: "guash",
                slug_ru: "guash",
                url: "/buket/guash",
                width: 25
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1910,
                height: 40,
                id: 3263,
                images: [{id: 8509, user_id: null, type: "image", is_main: false, original_name: "4988-1.jpg"}],
                in_wishlist: false,
                is_new: false,
                is_popular: true,
                is_product_of_day: false,
                items: [{name: "Гвоздика кустовая", refs_item_type_id: 1, count: "2.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1910,
                product_name: "Букет  «Rainbow sparkle: Roses, Carnations and Lisianthuses»",
                slug: "rainbow-sparkle-roses-carnations-and-lisianthuses",
                slug_ru: "rainbow-sparkle-roses-carnations-and-lisianthuses",
                url: "/buket/rainbow-sparkle-roses-carnations-and-lisianthuses",
                width: 20
            },
            {
                category: {id: 6},
                currency: "RUB",
                discount: 0,
                full_price: 1940,
                height: 0,
                id: 2719,
                images: [{id: 7511, user_id: 1, type: "image", is_main: false, original_name: "phpUpW8on"}],
                in_wishlist: false,
                is_new: false,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Антуриум", refs_item_type_id: 8, count: "1.00"}],
                partner: {slug: "tsvetochnyy-rynok", localized_partner_name: "Цветочный рынок"},
                price: 1940,
                product_name: "Антуриум",
                slug: "anturium-2719",
                slug_ru: "anturium-2719",
                url: "/gorshechnie/anturium-2719",
                width: 0
            },
            {
                category: {id: 1, name: {de: "Strauss", en: "Bouquets", ru: "Букеты"}},
                currency: "RUB",
                discount: 0,
                full_price: 1950,
                height: 40,
                id: 4778,
                images: [{id: 11769, user_id: 1030, type: "image", is_main: false, original_name: "phpiBDi2j"}],
                in_wishlist: false,
                is_new: true,
                is_popular: false,
                is_product_of_day: false,
                items: [{name: "Тюльпан сортовой", refs_item_type_id: 1, count: "15.00"}],
                partner: {slug: "mycvety", localized_partner_name: "mycvety"},
                price: 1950,
                product_name: "Букет  «15 белых Тюльпанов»",
                slug: "15-belykh-tyulpanov",
                slug_ru: "15-belykh-tyulpanov",
                url: "/buket/15-belykh-tyulpanov",
                width: 23
            }
        ]
    });
}));

server.use((req, res,) => {
    log.error(`${new Date().toLocaleString()}. Error status: 404. URL: ${req.url}`);

    res.status(404).render('errors/404', {
        data: {
            url: req.url
        }
    });
});

server.use((err, req, res, next) => {
    log.error(`${new Date().toLocaleString()}. Error status: ${err.status || 500}. Message: ${err.message}. Stack: ${err.stack}`);

    if (res.headersSent)
        return next(err);

    res.status(err.status || 500).render('errors/500', {err});
});

server.listen(config.get('port'), () => {
    log.info(new Date().toLocaleString() + '. Server listening on port ' + config.get('port'));
});