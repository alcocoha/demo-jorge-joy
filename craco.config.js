/* craco.config.js */
const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      'Components': path.resolve(__dirname, 'src/components'),
      'Routers': path.resolve(__dirname, 'src/routers'),
      'Pages': path.resolve(__dirname, 'src/pages'),
      'Assets': path.resolve(__dirname, 'src/assets'),
      'Api': path.resolve(__dirname, 'src/api'),
      'Hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
}
