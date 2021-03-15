const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // step 4 html
const CopyPlugin = require("copy-webpack-plugin"); // step 4 copy

module.exports = {
	
	mode: 'development',
  	entry: './src/index.js', //Here the application starts executing and webpack starts bundling

  	//devtool: 'inline-source-map', 
  	/*	 
  	In order to make it easier to track down errors and warnings, JavaScript offers source maps, 
  	which map your compiled code back to your original source code. If an error originates from a file called `hello_world.js`, 
  	the source map will tell you exactly that. *inline-source-map* : A SourceMap is added as a DataUrl to the bundle, 
  	thought more for development mode.	
  	*/ 

	output: { // options related to how webpack emits results
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		// Step 6
		environment: {
			// The environment supports arrow functions ('() => { ... }').
			arrowFunction: false,
			// The environment supports BigInt as literal (123n).
			bigIntLiteral: false,
			// The environment supports const and let for variable declarations.
			const: false,
			// The environment supports destructuring ('{ a, b } = obj').
			destructuring: false,
			// The environment supports an async import() function to import EcmaScript modules.
			dynamicImport: false,
			// The environment supports 'for of' iteration ('for (const x of array) { ... }').
			forOf: false,
			// The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
			module: false,
		  },
		  //
	},
	
	devServer: { //The `webpack-dev-server` provides you with a simple web server and the ability to use live reloading.
		contentBase: path.join(__dirname, 'dist'),
	},

	plugins: [
		new HtmlWebpackPlugin({ //step 4 html
			template: './src/main.html'
		}),
		//
		new CopyPlugin({	// step 4 copy
			patterns: [
			  { from: "images", to: "assets" },
			  // You can add the number of folders you want using the same structure { from: "folder", to: "dest" },
			],
		  }),
		  //
	],

	//step 5 ts
	module: {
		rules: [
		  /* step 6{
			test: `/\.tsx?$/`,
			use: 'ts-loader',
			exclude: /node_modules/,
		  },*/

		  // Step 6
		  {
			test: /\.(ts|js)$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
					  presets: [
						['@babel/preset-env',
						  {  targets: { browsers: '> 0.25%, IE 11, not dead' }	}
						]
					  ],
					  plugins: [
						['@babel/plugin-transform-runtime',
						  { regenerator: true }
						]
					  ]
					}
				}
			],
			exclude: /node_modules/,
		  }
		],
		//
	  },
	  resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	  },
};