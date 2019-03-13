const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        
        index: path.resolve(__dirname, '../src/js/index.js'), //绝对路径
        pushPractise:path.resolve(__dirname,'../src/js/push.js'),
        build:path.resolve(__dirname,'../src/js/build.js'),
        answerPractise:path.resolve(__dirname,'../src/js/answerPractise.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),//输出根目录
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        port: 8190,
        contentBase: path.resolve(__dirname, '../dist'),
        overlay: true
    },
    devtool: 'cheap-eval-source-map',  
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader:'file-loader',
                options: {
                    filename:'[name].[ext]',
                    publicPath: '../assets/imgs',
                    outputPath: './assets/imgs'
                },
                exclude: path.resolve(__dirname, '../node_modules')
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '../node_modules')
            },{
                test: /\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader:'style-loader',
                        options: {
                            sourceMap:true
                        }
                    },
                    use:[{
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        },
                    }]
                }),
                exclude: path.resolve(__dirname, '../node_modules')
            }, {
                test: /\.(htm|html)$/,
                use: ['html-withimg-loader']
            }
        ]
    },
    plugins: [
        
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].min.css'
        }),
        
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/html/pushPractise.html'),
            filename: 'html/pushPractise.html',
            inject: true,
            chunks: ['pushPractise']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/html/build.html'),
            filename: 'html/build.html',
            inject: true,
            chunks: ['build']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/html/answerPractise.html'),
            filename: 'html/answerPractise.html',
            inject: true,
            chunks: ['answerPractise']
        }),
       
    ]
}