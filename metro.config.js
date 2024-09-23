// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true
})

module.exports = withNativeWind(config, {
  input: './src/styles/globals.css',

  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json', 'mjs'] //add here
  }
})
