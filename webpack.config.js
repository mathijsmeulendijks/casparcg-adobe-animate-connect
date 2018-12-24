const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'casparcg-adobe-animate-connect.js',
        path: path.resolve(__dirname, 'dist')
    }
};
