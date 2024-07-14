const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        admin: './resources/js/admin/App.jsx',
        website: './resources/js/website/App.jsx',
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js', // Use [name] placeholder to differentiate output filenames
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
    mode: 'production', // Set mode to 'production' or 'development' based on your environment
};
