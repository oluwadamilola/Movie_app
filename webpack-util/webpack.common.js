const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './client/app/index.js',

    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {

                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            inject: 'body'
        })
    ],

    output: {
        path: path.resolve(__dirname, './client/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './client'
    },
};