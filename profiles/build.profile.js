var profile = {
    basePath: '../src/',
    action: 'release',
    optimize: 'closure',
    selectorEngine: 'acme',
    layers: {
        'dojo/dojo': {
            include: [
                'dojo/i18n',
                'app/run',
                'dojo/text'
            ],
            customBase: true,
            boot: true
        }
    }
};