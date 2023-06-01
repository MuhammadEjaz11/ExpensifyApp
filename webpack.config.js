// console.log(__dirname)
// const path = require('path');

// module.exports = {
//     entry: './app.js',
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             loader: 'babel-loader',
//             exclude: /node_modules/,

//         },
//         {
//             test: /\.scss$/,
//             use:[
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         },
//         {
//             test: /\.css$/,
//             use:[
//                 'style-loader',
//                 'css-loader',
//             ]
//         }
//     ],
//     },
//     devtool: 'eval-cheap-module-source-map',
//     devServer: {
//         allowedHosts: 'all',
//         static: {
//             directory: __dirname,
//         },
//         historyApiFallback: true
//     },
//     mode: 'development',

// }




const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        entry: './app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                }

            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ].filter(Boolean),
        devServer: {
            historyApiFallback: true,
            //   contentBase: './dist',
            hot: true
        },
        devtool: isDevelopment ? 'eval-source-map' : 'source-map'
    };
};