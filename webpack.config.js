
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', }),
        ],

        module: {
            rules: [
                {
                test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader, // Витягує CSS у окремі файли
                        "css-loader"
                    ],
                },
                {
                test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader, // Витягує CSS у окремі файли
                        "css-loader",// Translates CSS into CommonJS
                        "sass-loader",// Compiles Sass to CSS
                    ],
                },
                {
                test: /\.less$/i,// compiles Less to CSS
                    use: [
                        MiniCssExtractPlugin.loader, // Витягує CSS у окремі файли
                        "css-loader",
                        "less-loader",
                    ],
                },
            ],
        },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true,
        },
    }
};