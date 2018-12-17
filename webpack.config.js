var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html'
        }),
    ],
};