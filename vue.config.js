const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        [process.env.VUE_APP_BUSE_API]: {
          // 代理标识, 如果出现了这个就代表需要代理
          target: process.env.VUE_APP_YYY_URL,
          pathRewrite: {
            ['^' + process.env.VUE_APP_BUSE_API]: '' // 重写路由, 把想替换掉的路由地址替换为空或者别的
          }
        }
      }
    },
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
      require('unplugin-element-plus/webpack')({
        // options
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
