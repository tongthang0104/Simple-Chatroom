const webpack = require('webpack')
const path = require('path');

module.exports = {
    context: __dirname + '/client',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/client/dist',
        filename: 'chatroom.bundle.js'
    }
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    // ]
};
