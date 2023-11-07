const path = require('path');

module.exports = {
    entry: './main.js', // Adjust this to your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
    },
};