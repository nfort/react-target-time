const path = require('path');
module.exports = {
  title: 'React target time',
  components: './src/**/*.js',
  updateWebpackConfig(webpackConfig) {
    // Your source files folder or array of folders, should not include node_modules
    const dir = path.join(__dirname, 'src');
    webpackConfig.module.loaders.push(
      // Babel loader will use your project’s .babelrc
      { test: /\.jsx?$/, include: dir, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, include: dir, loaders: ["style", "css", "sass"] },
      { test: /\.css$/, include: dir, loaders: ["style-loader!css-loader"] }
    );
    return webpackConfig;
  },
};