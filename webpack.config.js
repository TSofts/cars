/**
 * Created by shawn on 15-12-23.
 */
var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    entry: {
        app: './js/app.js',
        vendor: ['react', 'react-dom', 'react-router', 'jquery', 'jquery.cookie', 'react-bootstrap','bootstrap-webpack']
    },
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', 'jsx'],
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },

            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            React: "react",
            _: "underscore"
        })
    ]
};
