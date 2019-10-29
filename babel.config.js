module.exports = (api) => {

  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-async-to-generator',
  ]

  return {
    presets,
    plugins,
  }
}
