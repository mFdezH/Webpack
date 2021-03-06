**# Webpack**

Initial config to use webpack in your project


If you want to download this project, just type ``npm i`` for install all the dependencies and plugins installed for this initial configuration. But if you want to create a project by your own just follow the next steps.



**# STEP ONE** start project

Create a directory and initialize it: ``bash npm init -y``

This command creates a file called `package.json` with a basic information of your project and predetermined values.

In this file will be saved all the depedencies that you will install according to the project's need.

Install webpack dependency locally:  ``npm i --save-dev webpack webpack-cli``

You will see a new directory `node_modules` and a file `package-lock.json`. 
The file `package.json` will be updated with the new installed dependencies.



**# STEP TWO** Hello webpack

Create directory `src` and create a file in, `index.js`.

Create directory `dist` and create a file in, `index.html`.

To use lodash install the dependency locally: ``npm i --save lodash``.
Lodash is a utility library for Javascript.

If everything goes correct, with the command ``npx webpack`` you could see a new file in 
`dist` called `main.js` and `main.js.LICENSE.txt`.

If you open `index.html` in the browser you will see "Hello webpack".



**# STEP THREE** Initial webpack config

Create file `webpack.config.js`.

**Install dev-server**:  ``npm install --save-dev webpack-dev-server``

Create a script in `package.json` to run dev-server ``"start": "webpack serve --open"``.




**# STEP FOUR** Plugins

There are a lot of plugins, see more information in webpack webpage --> [Plugins](https://webpack.js.org/plugins/).

For this project I'm going to install two. 

`HtmlWebpackPlugin`: This plugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.  

To install: ``npm install --save-dev html-webpack-plugin`` and add to `webpack.config.js` the code with the comment `// step 4 html`.

Now, if you create a html template, called, for example, `main.html` and you delete `index.html` from the directory `dist` when you build your code with a script defined in `package.json`: ``"dev": "webpack --mode development"`` an html file will be generated automatically called `index.html`.

Other usefull plugin for a project is `CopyWebpackPlugin`: Copies individual files or entire directories, which already exist, to the build directory.

To install: ``npm install copy-webpack-plugin --save-dev`` and add to `webpack.config.js` the code with the comment `// step 4 copy` 

For example, I'm going to copy a directory called `images`. When I build the project, the directory will be created or updated in `dist`.



**# STEP FIVE** Lit-element and typescript

To install lit-element: ``npm i lit-element``. 
I`ve create a simple component using litelement.

To install typescript, first install the TypeScript compiler and loader by running: ``npm install --save-dev typescript ts-loader``.
Now for configuration:

Create file `tsconfig.json` and  copy the code.
Also modify `webpack.config.js` with the code commented with `// step 5 ts`.



**# STEP SIX**  Internet explorer is especial.

To be able to build the project for the browser Internet Explorer you need babel and core-js.

To install:  `npm install --save-dev @babel/core, @babel/plugin-proposal-class-properties, @babel/plugin-proposal-decorators, @babel/plugin-transform-runtime, @babel/preset-env, @babel/preset-typescript, @babel/runtime, babel-loader` and `npm install --save core-js`.
Also modify `webpack.config.js` with the code commented with `// step 6`.