const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer: {
  //   proxy: 'https://script.google.com/',
  //   headers: { 'Access-Control-Allow-Origin': '*' }
  // },
  // configureWebpack: {
  //   devServer: {
  //     headers: { 'Access-Control-Allow-Origin': '*' }
  //   }
  // },
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/SolarBkLandingPage.github.io/' // Thay tên repository của các bạn vào đây nhé
  //   : '/'
});
