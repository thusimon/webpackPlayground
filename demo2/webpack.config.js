const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude:[/\.min.js$/i, /node_modules/i],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env'],
                            plugins: ['babel-plugin-transform-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(xml)$/i,
                use: ['xml-loader']
            },
            {
                test: /\.(css)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    }, 
                    'css-loader'
                ]
            },
            {
                test: /\.(scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({}), 
            new OptimizeCSSAssetsPlugin({})
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css'
        })
    ]
}
