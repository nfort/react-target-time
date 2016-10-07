module.exports = {
  entry: './demo/index.js',
  output: {
    path: './demo',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.s?css$/, loaders: ["style", "css", "sass"] }
    ]
  }
};
