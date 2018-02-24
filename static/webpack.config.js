/*
* TODO: determine whether you should use the extract text plugin to separate out scc
* TODO: figure out code splitting with splitbypath or commonchunks plugin
* NOTE: seems like images need to be handled by django (bc webpack-loader aims only at js and css)
* */
let path = require("path");
let webpack = require("webpack");
let BundleTracker = require("webpack-bundle-tracker");
let UglifyJs = require("uglifyjs-webpack-plugin");
// let SplitByPathPlugin = require('webpack-split-by-path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './assets/js/index'
    ],
    output: {
        path: path.resolve('./assets/bundles'),
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js",
        publicPath: 'http://localhost:3000/assets/bundles',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({filename: './webpack-stats.json'}),
        // new UglifyJs(),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },

};