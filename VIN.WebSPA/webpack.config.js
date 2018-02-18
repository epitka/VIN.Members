var path = require('path');
var webpack = require("webpack");

module.exports = {
    resolve: { extensions: ['', '.js', '.ts'] },

    entry: { "main-client": "./wwwroot/ts/app.ts" },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './wwwroot/dist'),
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            { test: /\.ts/, include: '/wwwroot/ts/', loader: 'ts' }
        ]
    }
};  