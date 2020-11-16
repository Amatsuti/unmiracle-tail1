module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  chainWebpack: config => {
    config.module
      .rule('wasm')
      .test(/\.wasm$/)
      .use('wasm-loader')
        .loader('wasm-loader')
        .end()
  }
}
