const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Lamber - test',
        template: 'src/assets/index.html'

    })],
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false,

    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                }, 'css-loader',
                ],
            },
        ],
    },
};






