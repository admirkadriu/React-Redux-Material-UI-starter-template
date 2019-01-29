const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
    },
});