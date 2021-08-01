const { merge } = require('webpack-merge');
const devConfiguration = require('./webpack.dev');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(devConfiguration,
    {
        entry: './src/client/index.js',
        mode: 'production',
        plugins: [
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
        ],
        optimization: {
            minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        }
    })