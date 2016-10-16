module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/scripts",
    filename: "bundle.js"
  },

  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
}