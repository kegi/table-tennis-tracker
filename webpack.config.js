const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const postcssNormalize = require('postcss-normalize')

const buildDirectory = 'dist'

const extractedStyles = new ExtractTextPlugin({
  filename: '[name].bundle.css',
})

/**
 * this return the loaders needed to compile the styles
 * note: handleAsModules=true will handle the style as a module and generate a
 * type definition [name].module.css.d.ts
 *
 * https://github.com/css-modules/css-modules
 * https://github.com/seek-oss/css-modules-typescript-loader
 *
 * @param handleAsModules
 * @returns {*}
 */
const getStylesLoaders = (handleAsModules = false) => {
  const loaders = []

  /* sass */

  loaders.unshift({
    loader: 'sass-loader',
  })

  /* postcss */

  loaders.unshift({
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        postcssNormalize(),
      ],
    },
  })

  /* handle css */

  loaders.unshift({
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: handleAsModules,
    },
  })

  /* typing (if handleAsModules) */

  if (handleAsModules) {
    loaders.unshift({
      loader: 'css-modules-typescript-loader',
    })
  }

  return extractedStyles.extract({
    use: loaders,
  })
}

module.exports = [
  {
    entry: {
      main: './src/index.tsx',
    },

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, buildDirectory),
      publicPath: `${buildDirectory}/`,
    },

    module: {

      /* JavaScript */

      rules: [
        {
          test: /\.[j|t]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },

        /* CSS + SASS */

        {
          test: /\.s?css$/,
          exclude: [
            /\.module\.s?css$/,
            /node_modules/,
          ],
          use: getStylesLoaders(false),
        },

        {
          test: /\.module\.s?css$/,
          exclude: [
            /node_modules/,
          ],
          use: getStylesLoaders(true),
        },

        /* Images */

        {
          test: /\.(png|jpg|jpeg|bmp|gif)$/,
          loader: 'file-loader',
          options: {
            publicPath: (url) => url,
          },
        },

        /* Medias */

        {
          test: /\.(mp4|wav)$/,
          loader: 'file-loader',
          options: {
            options: {
              publicPath: (url) => url,
            },
          },
        },

        /* Fonts */

        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
          options: {
            publicPath: (url) => url,
          },
        },

        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          options: {
            publicPath: (url) => url,
          },
        },
      ],
    },

    plugins: [
      extractedStyles,
      new CleanWebpackPlugin(),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css'],
    },

    performance: {
      hints: false,
    },

    devServer: {
      host: '127.0.0.1',
      open: false,
      publicPath: `/${buildDirectory}/`,
      historyApiFallback: true,
      watchOptions: {
        ignored: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    },
  }]
