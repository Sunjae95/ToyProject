module.exports = function (api) {
    api.cache(true);

    const presets = [
        ["@babel/preset-env"]
    ];

    const plugins = [
        ['@babel/plugin-transform-async-to-generator'],
        ["@babel/plugin-transform-runtime"],
        ["@babel/plugin-proposal-class-properties", { "loose": true } ]
    ];

    return {
        presets,
        plugins
    };
}