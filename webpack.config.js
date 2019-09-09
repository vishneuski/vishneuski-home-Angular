module.exports = {
  entry: './src/app1.ts',
  output: {
    filename: 'app1.js',
    path: __dirname + './dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'awesome-typescript-loader' }
    ],
  },
  devServer: {
    port: 3000,
  },
};