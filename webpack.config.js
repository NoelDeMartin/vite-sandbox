const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/webpack-bundle.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'webpack-bundle.js',
    },
};
