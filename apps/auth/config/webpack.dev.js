const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:3002/',
	},
	devServer: {
		port: 3002,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./utils': './src/utils',
				'./App': './src/bootstrap'
			},
			shared: packageJson.dependencies
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CleanWebpackPlugin(),
	]
};


module.exports = merge(commonConfig, devConfig)