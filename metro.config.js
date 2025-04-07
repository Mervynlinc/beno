const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/globals.css' })
// module.exports = (async () => {
//     const config = await getDefaultConfig();
//     config.transformer = {
//         babelTransformerPath: require.resolve("react-native-svg-transformer"),
//     };
//     config.resolver = {
//         assetExts: config.resolver.assetExts.filter(ext => ext !== "svg"),
//         sourceExts: [...config.resolver.sourceExts, "svg"],
//     };
//     return config;
// })();