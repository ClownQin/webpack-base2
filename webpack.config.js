module.exports = {
	entry:'./js/entry.js',
	output:{
		filename:'./bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			}
		]
	}
}
