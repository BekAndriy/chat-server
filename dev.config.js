const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: ['bootstrap-loader', 'webpack-hot-middleware/client', './src/index.html', ],
    output: {
        publicPath: '/build/',
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader?localIdentName=[path][name]--[local]!postcss-loader!sass-loader',
        }],
    },
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"',
        },
        __DEVELOPMENT__: true,
    }), new ExtractTextPlugin('bundle.css'), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new webpack.ProvidePlugin({
        jQuery: 'jquery',
    }), ],
};