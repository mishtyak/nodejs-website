const mix = require('laravel-mix');

mix.setPublicPath('./public/dist')
    .version();

mix
    .js('assets/app', 'site')
    .sass('assets/app.scss', 'site');