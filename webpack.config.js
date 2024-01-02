const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // Ruta a tu archivo HTML de origen
          filename: 'index.html', // Nombre del archivo generado
          // Otras opciones...
        }),
        new HtmlWebpackPlugin({
            template: './src/menu.html',
            filename: 'menu.html',
            
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            
        }),
      ]
};