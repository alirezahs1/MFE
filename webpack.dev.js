const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('./package.json')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:3000/',
	},
	devServer: {
		port: 3000,
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				'profile': 'profile@http://localhost:3001/remoteEntry.js',
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