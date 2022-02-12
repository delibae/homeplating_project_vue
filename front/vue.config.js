module.exports = {

}

module.exports = {
  // ...
  devServer: {
    overlay: false
  },
  lintOnSave: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9000, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
  // ...
}