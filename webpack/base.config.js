import path from 'path';
import webpack from 'webpack';

const srcPath = path.join(__dirname, '../src/browser/');
const assetPath = path.join(__dirname, '../src/assets/');

const baseConfig = ({ input, output = {}, globals = {}, plugins, loaders, entry = [] }) => ({
  entry: input || {
    background: [`${srcPath}extension/background/index`, ...entry],
    inject: [
      `${srcPath}extension/inject/index`,
      `${assetPath}css/inject`,
      ...entry
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    ...output
  },
  plugins: [
    new webpack.DefinePlugin(globals),
    ...(plugins ? plugins :
      [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          comments: false,
          compressor: {
            warnings: false
          }
        })
      ])
  ],
  resolve: {
    alias: {
      app: path.join(__dirname, '../src/app'),
      extension: path.join(__dirname, '../src/browser/extension')
    },
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      ...(loaders ? loaders : [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }]),
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      }
    ]
  }
});

export default baseConfig;
