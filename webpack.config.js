var webpack = require("webpack")
var path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.noDeprecation = true

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: "./src/bundle.js",
        sourceMapFilename: './src/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react', 'react-hmre']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }, 'sass-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                warnings: false,
                mangle: false
            }),
        ],
    },
    devServer: {
        stats: 'errors-only'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            title: 'Test react app',
            myPageHeader: 'Automatically generated',
            filename: 'index.html' //relative to root of the application
        })
    ]
}
