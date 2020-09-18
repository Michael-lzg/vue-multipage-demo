const glob = require('glob')

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
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}

module.exports = {
  publicPath: './',
  pages: getPages(),
  chainWebpack: config => {
    // 打包文件带hash
    config.output.filename('[name].[hash].js').end()
  }

}
