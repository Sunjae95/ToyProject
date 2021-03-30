const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devServer: {
        open: true,
        overlay:true,
        hot:true,
        port:8080
    },
}

module.exports = merge(common, config);