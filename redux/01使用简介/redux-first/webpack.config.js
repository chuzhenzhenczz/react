module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,
                exclude: /.*node_modules((?!my-npm-linked-module-name).)*$/,
                loader: 'babel-loader', // 'babel-loader' is also a valid name to reference

            }
        ]
    }
};