const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rocketz',
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    })
  ],
  devServer: {
    port: 3000
  }
};