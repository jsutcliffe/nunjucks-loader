module.exports = {

    target: 'web',

    context: __dirname,

    entry: 'mocha-loader!./web.js',

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.(njk|nunjucks)$/,
                loader: '../index.js',
                options: {
                    jinjaCompat: true,
                    config: __dirname + '/nunjucks.config.js'
                }
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            }
        ]
    },

    resolve: {
        modules: [
            __dirname,
            __dirname + '/fixtures/templates',
            __dirname + '/fixtures/custom_modules',
            'web_loaders',
            'web_modules',
            'node_loaders',
            'node_modules',
            '../'
        ]
    }

};
