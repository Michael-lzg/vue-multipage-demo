const glob = require('glob')
const webpack = require('webpack')
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const pages = {}
function getPages () {
  glob.sync('./src/pages/*/*.js').forEach(filepath => {
    const fileList = filepath.split('/')
    const fileName = fileList[fileList.length - 2]
    pages[fileName] = {
      entry: `src/pages/${fileName}/main.js`,
      // 模板来源
      template: `src/pages/${fileName}/${fileName}.html`,
      title: 'vue-multipage',
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}.html`
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}

function resolve (dir) {
  // path.join()方法用于连接路径
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pages: getPages(),
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack (config) {
    config.output.filename('[name].[hash].js').end()
    // config.resolve.alias.set('@ant-design-vue/icons/lib/dist$', resolve('./src/icons.js'))
    // config.optimization.splitChunks({
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       name: 'vendor',
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: 10,
    //       chunks: 'initial' // only package third parties that are initially dependent
    //     },
    //     antUI: {
    //       name: 'antUI', // split antUI into a single package
    //       priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //       test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/ // in order to adapt to cnpm
    //     },
    //     commons: {
    //       name: 'commons',
    //       test: /[\\/]node_modules[\\/]_?vue(.*)/, // in order to adapt to cnpm
    //       priority: 15
    //     }
    //   }
    // })
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }

}
