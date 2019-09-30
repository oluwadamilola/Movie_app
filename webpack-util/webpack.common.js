const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './app/index.js'
    },
    module: {
        rules: [{
                test: /\.(js|jxs)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {

                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jxs']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack bundled JavaScript Project',
            template: './client/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, '../', 'client'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './client'
    },
};