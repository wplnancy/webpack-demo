module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }
        ]
    },
    devtool:'cheap-module-source-map',
    devServer: {
        progress: true,
        contentBase: 'build',
        stats: {colors: true},
        inline: true,
        host: "127.0.0.1",
        port: "9090"
    },
    resolve:{
        extension:[',','.js','.jsx','.css'],
    }
};