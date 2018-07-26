const path = require('path');
const webpack = require('webpack');

const dev_mode = "development"

module.exports = {

    entry: {
        'index_bundle': './src/app.js', 
 
    },
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                query: {
                    presets: ['react', 'env', 'stage-0']
                },
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(dev_mode)
            }
        })
    ],
    watch: true,
    mode: dev_mode
} 