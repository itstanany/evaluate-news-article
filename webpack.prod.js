const merge = require('webpack-merge');
const devConfiguration = require('./webpack.dev');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(devConfiguration,
    {
        entry: './src/client/index.js',
        mode: 'production',
        plugins: [
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
            // TODO: configure workbox-webpack-plugin
        ],
        optimization: {
            // TODO: Add Optimization for JS and CSS
        }
    })