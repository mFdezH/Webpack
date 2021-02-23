const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // step 4 html
const CopyPlugin = require("copy-webpack-plugin"); // step 4 copy

module.exports = {
	
	mode: 'development',
  	entry: './src/index.js', //Here the application starts executing and webpack starts bundling

  	devtool: 'inline-source-map', 
  	/*	 
  	In order to make it easier to track down errors and warnings, JavaScript offers source maps, 
  	which map your compiled code back to your original source code. If an error originates from a file called `hello_world.js`, 
  	the source map will tell you exactly that. *inline-source-map* : A SourceMap is added as a DataUrl to the bundle, 
  	thought more for development mode.	
  	*/ 

	output: { // options related to how webpack emits results
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	
	devServer: { //The `webpack-dev-server` provides you with a simple web server and the ability to use live reloading.
		contentBase: path.join(__dirname, 'dist'),
	},

	plugins: [
		new HtmlWebpackPlugin({ //step 4 html
			template: './src/main.html'
		}),
		new CopyPlugin({	// step 4 copy
			patterns: [
			  { from: "images", to: "assets" },
			  // You can add the number of folders you want using the same structure
			],
		  }),
	],
};