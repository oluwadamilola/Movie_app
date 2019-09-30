const common = require("./webpack-util/webpack.common");
const merge = require("webpack-merge");
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
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './client/index.html'
        })
    ],
    output: {

        publicPath: '/',
        path: path.resolve(__dirname, 'client')
    },

};