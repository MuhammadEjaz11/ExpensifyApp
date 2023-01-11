console.log(__dirname)
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,

        },
        {
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        allowedHosts: 'all',
        static: {
            directory: __dirname,
        },
        historyApiFallback: true
    },
    mode: 'development',

}