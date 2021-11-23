const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dev'),
        filename: 'index_bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
              },
        ]
    },
    plugins: [
        new ESLintPlugin({
                fix: true
              }
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}