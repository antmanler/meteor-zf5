Package.describe({
    summary: "Foundation 5 with Sass for Meteor"
});

Package.on_use(function (api) {
    api.use("scss", ['client', 'server']);
    api.imply('scss', ['client', 'server']);
    api.use('jquery', 'client');

    api.add_files([
        'js/init.js',
        'js/vendor/modernizr.js',
        'js/foundation.js'
    ], 'client');

});
