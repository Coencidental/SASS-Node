module.exports = {
  mode: "development",
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Style loader - creates style nodes from JS Strings of Common JS Module
          'style-loader',
          // Convert Sass to CommonJS Module
          'css-loader',
          // Compile Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
}