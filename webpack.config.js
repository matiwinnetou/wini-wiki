let webpack = require('webpack');
let path = require('path');
let rules = require('./webpack.loaders');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx']
	},
	module: {
		rules
	},
	devServer: {
		contentBase: "./public",
		hot: true,
		inline: true,
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html'
		}),
	]
};
