const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    config.output.libraryTarget = 'system'
    config.devServer.port = 8081
  }
})
