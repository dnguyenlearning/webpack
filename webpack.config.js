const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpackMerge = require('webpack-merge');
const presetsConfig = require('./webpack-config/loadPresets');
const modeConfig = env => require(`./webpack-config/webpack.${env}`)(env);

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
    return webpackMerge({
            mode: mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [{
                            loader: "url-loader",
                            options: {
                                limit: 5000
                            }
                        }]
                    }
                ]
            },
            output: {
                filename: "bundle.js",
                path: __dirname + '/dist'
            },
            plugins: [
                htmlPlugin,
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
        presetsConfig({mode, presets})
    );
};
