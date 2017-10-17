const webpack = require('webpack');
const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png', '.svg'],
		alias: {
			images: path.resolve(__dirname, 'src/assets/imgs'),
			svg: path.resolve(__dirname, 'src/assets/svg'),
			components: path.resolve(__dirname, 'src/app/components')
		}
	},
	module: {
	    rules: [
	    	/* Transpile Javascript */
	    	{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query:
			    	{
						presets:['react']
			      	},
	    	},
	    	/* Compile SASS */
	    	{
	    		test: /\.scss$/,
	    		use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader', 'postcss-loader'],
				})),
	    	},
	    	/* Optimize assets (PNG, JPG, GIF & SVG) */
	    	{
	    		test: /\.(jpe?g|png|gif)$/i,
	    		loaders: ['file-loader?context=src/assets/imgs/&name=assets/imgs/[path][name].[ext]', {
	    			loader: 'image-webpack-loader',
	    			query: {
	    				mozjpeg: {
	    					progressive: true,
	    				},
	    				gifsicle: {
	    					interlaced: false,
	    				},
	    				optipng: {
	    					optimizationLevel: 4,
	    				},
	    				pngquant: {
	    					quality: '75-90',
	    					speed: 3,
	    				},
	    			},
	    		}],
	    		exclude: /node_modules/,
	    		include: __dirname,
	    	},
	    	{
	    		test: /\.(svg)$/i,
	    		loaders: ['file-loader?context=src/assets/svg/&name=assets/svg/[path][name].[ext]', {
	    			loader: 'image-webpack-loader',
	    		}],
	    		exclude: /node_modules/,
	    		include: __dirname,
	    	},
	    	{
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?context=src/fonts/&name=fonts/[path][name].[ext]'
            },
	    ]
  	},
  	plugins: [
  		new ExtractTextWebpackPlugin('style.css'),
  		new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'src/index.html',
	      minify: {
	      	caseSensitive: true,
	      	collapseBooleanAttributes: true,
	      	collapseInlineTagWhitespace: true,
	      	collapseWhitespace: true,
	      	conservativeCollapse: true,
	      	decodeEntities: true
	      }
	    }),
  	],
  	devServer: {
  		contentBase: path.resolve(__dirname, './build'),
  		historyApiFallback: true,
  		inline: true,
  		open: true
  	},
  	devtool: 'eval-source-map'
}

module.exports = config;

/* If production command is run minify CSS & Javascript */

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
    	new webpack.optimize.UglifyJsPlugin(),
    	new OptimizeCSSAssets()
  	);
}