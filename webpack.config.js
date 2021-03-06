module.exports = {
  context: __dirname + '/app',
  // devtool: 'source-map',
  devtool: "#inline-source-map",

  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  }
};
