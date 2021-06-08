const isProduction = process.env.NODE_ENV === 'production'

let publicPath = '/'

if (isProduction) {
  publicPath = '/flake-analysis'
}

module.exports = {
  publicPath
}
