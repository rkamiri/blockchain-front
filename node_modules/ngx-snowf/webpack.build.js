const webpack = require('webpack');
const path = require('path');
var version = require('./package.json').version;

var banner =
    'ngx-snowf v' + version + '\n' +
    '2017 (c) - Fuxy526\n' +
    'Released under the MIT License.';

module.exports = {
    entry: './src/app/snowf/snowf.module.ts',
    output: {
        path: path.resolve(__dirname, './dist/snowf'),
        filename: 'ngx-snowf.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        '@angular/core': true,
        '@angular/common': true
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    } 
};