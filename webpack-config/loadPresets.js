const webpackMerge = require('webpack-merge');

const applyPresets = (env) => {
    console.log('ENV_VALUE ', env);
    const {presets} = env;
    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(
        presetName => {
            if (presetName) require(`./presets/webpack.${presetName}`)(env)
        }
    )
    return webpackMerge({}, ...mergedConfigs)
};

module.exports = applyPresets;