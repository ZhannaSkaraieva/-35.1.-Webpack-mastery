
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => { // с помошью переменной окружения создаем функцию и передаем конфигурацию для сборки 'development' or 'production'
    return {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src') + '/js/index.js',
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
        ],
        module: {
            rules: [
                {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                },
            ],
        },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
    }
};