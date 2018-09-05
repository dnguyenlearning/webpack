const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
    devtool: "source-map",
    output: {
        filename: "[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
})