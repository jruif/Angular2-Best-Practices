/**
 * webpack.common.js
 *
 * @Author: jruif
 * @Date: 16/9/29 上午11:40
 */

var path = require('path');
var webpack = require('webpack');
var packageJson = require('./package.json');

module.exports = {
    devtool: false,
    entry: {
        bundle: './app/main.ts',
        vendor: Object.keys(packageJson.dependencies)
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js',
        chunkFilename: 'js/[id].bundle.js',
        publicPath: '/dist/',
        pathinfo: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"],
        alias: {
            js: path.join(__dirname, "./app/")
        },
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader", 'angular2-template-loader'],
                include: path.join(__dirname, 'app/')
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
        ],
    }
};
