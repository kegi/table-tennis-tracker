module.exports = (api) => {

  api.cache(true)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]

  const plugins = []

  return {
    presets,
    plugins,
  }
}
