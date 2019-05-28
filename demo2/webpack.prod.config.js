const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'gallery': './src/gallery.js',
        'index': './src/index.js',
        'font-awesome': 'font-awesome/scss/font-awesome.scss'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './static/'
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
                
                test: /\.(scss)/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {                
                test: /\.(hbs)/i,
                use: [
                    {
                        loader: 'handlebars-loader'
                    }
                ]
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'font-awesome-loader'}
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({}), 
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            description: 'Webpack demo2',
            chunks:['index', 'vendors_gallery_index', 'vendors_font-awesome'],
            author: 'Lu',
            href1: 'gallery.html',
            href1Text: 'SouthPark Gallery',
            filename: 'index.html',
            template: './src/page-template.hbs'
        }),
        new HtmlWebpackPlugin({
            title: 'SP Gallery',
            description: 'SouthPark icons',
            chunks: ['gallery', 'vendors_gallery_index','vendors_font-awesome'],
            author: 'Lu',
            href1: 'index.html',
            href1Text: 'Home',
            filename: 'gallery.html',
            template: './src/page-template.hbs'
        })
    ]
}
