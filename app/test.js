module.exports = {

    entry: './app/index.js',

    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        }]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/clients',
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, ],
    },
    // 3
    devServer: {
        contentBase: './clients'
    }
};


"start": "webpack-dev-server --config ./webpack.config.js --mode development",