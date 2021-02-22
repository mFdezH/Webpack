const path = require('path');

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
};