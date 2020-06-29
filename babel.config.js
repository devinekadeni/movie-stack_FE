module.exports = function (api) {
  const isProduction = api.env('production')

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ]

  const plugins = [
    'react-hot-loader/babel',
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: !isProduction,
      },
    ],
  ]

  return { presets, plugins }
}
