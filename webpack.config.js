module.exports = {
    "entry": "./source/index.js"
}

const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};