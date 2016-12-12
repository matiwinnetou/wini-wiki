module.exports = [
	{
		test: /\.scss$/,
		exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
		loaders: [
			'style?sourceMap',
			'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
			'sass'
		]
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "file"
	},
	{
		test: /\.css$/,
		loader: "style-loader!css-loader?root=.",
		exclude: /(node_modules|bower_components|public\/)/
	},
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public\/)/,
		loader: "babel"
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "url?limit=10000&mimetype=application/octet-stream"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "url?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	}
];
