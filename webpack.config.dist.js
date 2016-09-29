/**
 * webpack.config.dist.js.js
 *
 * @Author: jruif
 * @Date: 16/9/29 上午11:19
 */

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig,{
    devtool: false,
    output: {
        filename: 'js/bundle.[hash].js',
        chunkFilename: 'js/[id].bundle.[hash].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'js/[name].[hash].js',
            minChunks: Infinity
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV) // JSON.stringify ensures it's a quoted quoted string
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            mangle: {
                keep_fnames: true
            }
        }),
        /*new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.tmp.html'
        }),*/
    ],
});

