const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port:8081,
    proxy: {
      '/': {
        target: 'http://localhost:8081', // Spring Boot サーバーのURL
        changeOrigin: true,
      },
    },
  configureWebpack: {
    devtool: 'source-map',
    optimization: {
      minimize: false,
    },
  }
    
  }
})
