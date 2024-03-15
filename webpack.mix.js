const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .styles(
        [
            "resources/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css",
            "resources/assets/plugins/custom/datatables/datatables.bundle.css",
            "resources/assets/plugins/global/plugins.bundle.css",
            "resources/assets/css/style.bundle.css",
        ],
        "public/css/estilos.css"
    )
    .scripts(
        [
            "resources/assets/plugins/global/plugins.bundle.js",
            "resources/assets/js/scripts.bundle.js",
            "resources/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js",
            "resources/assets/plugins/custom/datatables/datatables.bundle.js",
            "resources/assets/js/widgets.bundle.js",
            "resources/assets/js/custom/widgets.js",
            "resources/assets/js/custom/apps/chat/chat.js",
            "resources/assets/js/custom/utilities/modals/upgrade-plan.js",
            "resources/assets/js/custom/utilities/modals/create-app.js",
            "resources/assets/js/custom/utilities/modals/users-search.js",
        ],
        "public/js/scripts.js"
    )
    .copyDirectory("resources/assets", "public/assets")
    .copyDirectory("resources/assets/plugins/global/fonts", "public/css/fonts");
