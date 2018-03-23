const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  plugins: {
    'postcss-mixins': {},
    'postcss-for': {},
    'postcss-each': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-functions': {},
    'autoprefixer': {},
    // 'postcss-modules': {},
  }
})
