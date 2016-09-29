/**
 * webpack.config.js
 *
 * @Author: jruif
 * @Date: 16/9/29 上午10:49
 */

var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval-source-map',
    entry: './app/main.ts',
    output: {
        filename: 'js/bundle.js',
        chunkFilename: 'js/[id].bundle.js',
    },
    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),   //如果出现任何错误，就终止构建
        new webpack.DefinePlugin({      //用来定义环境变量，以便我们在自己的程序中引用它。
            DEBUG: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
