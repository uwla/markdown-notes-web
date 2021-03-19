/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for our application. We are compiling the Sass file for the application
 | and bundling up all the JS files.
 |
 */
const mix = require("laravel-mix");
mix.disableNotifications();
mix.js("./app/main.js", "./public/js")
	.sass("./styles/main.scss", "./public/css")
  .extract()
  .setPublicPath("./public/")
  .version();
