module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Required for Expo projects
      plugins: ['react-native-reanimated/plugin'], // Add the Reanimated plugin
    };
  };