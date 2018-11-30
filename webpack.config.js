gitvar path = require('path');

const webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');

var plugins = [];

const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}

module.exports = {
	entry:  "/ClientApp/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'build')
	},
	watch:  true,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: Extract.extract(
					{
						use: ['css-loader', 'sass-loader']
					}
				)
			},
			{
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader'
                // 'url-loader?limit=10000&name=[name]_[hash:6].[ext]'
            },
            {
                test: /\.css$/,
			       use: [
				        {
				           loader: "style-loader"
				        },
				        {
				           loader: "css-loader"
				         }
			        ]
            },
            {
				test: /\.js$/,
				loader: "babel-loader",
				exclude:/node_modules/,
				query:{
					presets:["react", "es2015"]
				}
			}
		]
	},
	watchOptions: {
	    poll: true
	},
	    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public/index.html')
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      }),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: true
      }))
    ])
};


