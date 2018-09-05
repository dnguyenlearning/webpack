/**
 * TODO: before want to complie typescript file. need to use "npm install typescript --save" first
 * @returns {{module: {rules: *[]}}}
 */

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    }
});