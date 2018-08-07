var path = require('path')
var webpack = require('webpack')

module.exports = {
	// entry: './src/main.js',
	entry: {
		main: './src/main.js',
		login: './src/login.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		disableHostCheck: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

var HtmlWebpackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV != 'development') {
	//可以针对线上目录单独定制build的公共path
	module.exports.output.publicPath = '/';
	//当执行打包流程而非开发调试流程时，生成的文件名规则需要改变为如下，该规则可实现当程序更新时，忽略浏览器缓存
	module.exports.output.filename = '[name].[chunkHash:6].bundle.js';

	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: `"${process.env.NODE_ENV}"`
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'container.tpl',
			chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			template: 'container.tpl',
			chunks: ['login']
		})
	])
}
