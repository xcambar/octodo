import path from 'path';
import webpack from 'webpack';
import baseConfig from './base.config';

const entry = [
  `webpack-dev-server/client?https://ssl.dev:3001`,
  'webpack/hot/only-dev-server'
];

export default baseConfig({
  output: {
    path: path.join(__dirname, '../dev/js'),
    publicPath: `https://ssl.dev:3001/js/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  loaders: [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
        'add-module-exports',
        'transform-decorators-legacy',
        [
          'react-transform',
          {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }
        ]
      ]
    }
  }],
  entry
});
