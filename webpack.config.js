var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    externals: [nodeExternals()],
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
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                alias: {
                    'pg-native': path.join(__dirname, 'aliases/pg-native.js'),
                    'pgpass$': path.join(__dirname, 'aliases/pgpass.js'),
                },
            }
          }),
          new webpack.ContextReplacementPlugin(
            /Sequelize(\\|\/)/,
            path.resolve(__dirname, '../src')
          )
    ]
};