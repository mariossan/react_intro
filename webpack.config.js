// requires
const path          = require('path')
const htmlWebpack   = require('html-webpack-plugin')

// variables 
let baseDir         = path.resolve( __dirname, "build" );

module.exports = {
    mode: "development",
    entry: [
        path.resolve(__dirname, "src/index.js"),
        path.resolve(__dirname, "src/algo.js")
    ],
    output: {
        path: baseDir,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: baseDir
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            filename: 'index.html',
            template: path.resolve(__dirname, "src/index.html")
        })
    ]
}