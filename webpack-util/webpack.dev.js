const merge = require('webpack-merge');
const common = require('./webpack.common.js/index.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map'
});