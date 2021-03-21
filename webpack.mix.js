const mix = require('laravel-mix')

mix.setPublicPath('./public/dist')
    .version()
    .sourceMaps()

mix
    .js('assets/site/app', 'site')
    .js('assets/site/fm/fm-native', 'site/fm')
    .js('assets/site/fm/fm-vue', 'site/fm')
    .js('assets/site/fm/fm-vue-ajax', 'site/fm')
    .js('assets/site/fm/fm-vue-components', 'site/fm')
    .sass('assets/site/app.scss', 'site')
    .sass('assets/site/fm/fm.scss', 'site/fm')