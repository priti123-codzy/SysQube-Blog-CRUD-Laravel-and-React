const path = require('path');

module.exports = {
    entry: {
        admin: './resources/js/admin/App.jsx',
        website: './resources/js/website/App.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js',
        publicPath: '/js/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development', // Or 'production' depending on your needs
};
