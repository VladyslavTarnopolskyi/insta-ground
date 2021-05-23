const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.join(__dirname, '/src'),
        exclude: '/node_modules/',
      },
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          {
            loader: "sass-loader"
          },
        ],
      },
      {
        test: /\.(png|jp(e)g|gif|svg)$/,
        use: [{
          loader: 'url-loader'
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
  ],
  devServer: {
    proxy: {
      '/oauth': {
        target: 'https://api.instagram.com',
        changeOrigin: true,
        secure: false
      },
    },
    https: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: "/",
    hot: true,
    port: 5000,
    historyApiFallback: {
      index: '/',
      disableDotRule: true,
    }
  }
}
