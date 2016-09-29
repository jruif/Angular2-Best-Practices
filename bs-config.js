var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compiler = webpack(config);

module.exports = {
    port: 9002,
    files: ["./app/**/*.{html,htm,css,js}"],
    server: {
        baseDir: "./app",
        routes: {
            "/node_modules": "node_modules"
        }
    },
    middleware: [
        require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }),
        require('webpack-hot-middleware')(compiler),
    ]
};