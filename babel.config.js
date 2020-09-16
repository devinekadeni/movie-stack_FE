module.exports = function (api) {
  const isProduction = api.env('production')

  const presets = ['next/babel']

  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: !isProduction,
      },
    ],
  ]

  return { presets, plugins }
}
