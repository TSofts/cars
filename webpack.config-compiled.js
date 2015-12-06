var webpack = require('webpack');

module.exports = {
    entry: ['./js/app.js'],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }, { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }, { test: /\.css$/, loader: "stylecss" }]
    },
    plugins: [new webpack.NoErrorsPlugin()]
};

//# sourceMappingURL=webpack.config-compiled.js.map