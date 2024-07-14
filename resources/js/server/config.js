// webpack.server.config.js

const path = require('path');

module.exports = {
  mode: 'production', // or 'development' depending on your environment
  entry: './server/index.js', // Entry point of your server-side code
  target: 'node', // Indicates this bundle is for Node.js environment

  // Other webpack configuration options as needed
  // ...

  output: {
    filename: 'server.bundle.js', // Adjust filename to be unique
    path: path.resolve(__dirname, 'public'), // Adjust output path as needed
  },

  // Other webpack configuration options as needed
  // ...

  // Define rules for modules (e.g., babel-loader for JavaScript/TypeScript, etc.)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Example loader configuration
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Example presets
            plugins: ['@babel/plugin-proposal-class-properties'], // Example plugins
          },
        },
      },
      // Add more rules as needed for other file types (e.g., CSS, images, etc.)
    ],
  },

  // Add plugins configuration as needed (e.g., HtmlWebpackPlugin, etc.)
  plugins: [
    // Example plugins configuration
    // new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],

  // Other webpack configuration options as needed
  // ...

  // Resolve configuration for resolving modules/extensions
  resolve: {
    extensions: ['.js', '.jsx'], // Example extensions
    // Add more configurations as needed (e.g., alias, modules, etc.)
  },

  // Other webpack configuration options as needed
  // ...

  // Optimization configuration for optimization options
  optimization: {
    // Example optimization configuration
    // minimize: true,
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
};
