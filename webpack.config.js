module.exports = {
    // 1
    entry: './app/index.js',
    // 2
    module: {
        rules: [{
            test: /\.(js|jxs)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jxs']
    },
    output: {
        path: __dirname + '/clients',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 3
    devServer: {
        contentBase: './clients'
    }
};