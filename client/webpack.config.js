
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const jsDir = path.resolve(__dirname, 'javascripts');


const entries = fs.readdirSync(jsDir)
    .filter(f => f.endsWith('.js'))
    .reduce((obj, file) => {
    const name = path.basename(file, '.js');
    obj[name] = path.join(jsDir, file);
    return obj;
    }, {});


const htmlDir = path.resolve(__dirname, 'html');
const htmlPlugins = fs.readdirSync(htmlDir)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .map(file => {
    const name = path.basename(file, '.html');
    return new HtmlWebpackPlugin({
        template: path.join(htmlDir, file),
        filename: path.join('html', file), 
        chunks: [name],
    });
    });


module.exports = {
    entry: entries,
    mode: 'production',
    output: {
        path:     path.resolve(__dirname, '../server/public'),
        filename: 'javascripts/[name].js',  
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
            loader: 'file-loader',
            options: {
                name:       '[name].[ext]',
                outputPath: 'images'
            }
        }]
      }
    ]
    },
    plugins: [
    ...htmlPlugins,
    new HtmlWebpackPlugin({
      template: "./html/index.html",
      filename: "./index.html",
      chunks : ['index']
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'images'), to: 'images/[name][ext]', noErrorOnMissing: true },
        { from: path.resolve(__dirname, 'css'),    to: 'css/[name][ext]',      noErrorOnMissing: true },
      ]
    }),
    new webpack.ProgressPlugin()
  ]
}; 