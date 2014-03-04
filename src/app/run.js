(function () {
    config = {
        baseUrl: './',
        packages: [
            'dojo',
            'dijit',
            'app'
        ]
    };
    require(config, ['app']);
})();
