**# Webpack**

Initial config to use webpack in your project



If you want to download this project, just type ``npm i`` for install all the dependencies and plugins installed for this initial configuration. But if you want to create a project by your own just follow the next steps.



**# STEP ONE** start project



Create a directory and initialize it with: ``bash npm init -y``



This command creates a file called `package.json` with a basic information of your project and predetermined values.

In this file will be saved all the depedencies that you will install according to the project's need.



Install webpack dependency locally with:  ``npm i --save-dev webpack webpack-cli``



You will see a new directory called `node_modules` and a file called `package-lock.json`. And the file `package.json` will be updated with the new installed dependencies.



**# STEP TWO** Hello webpack



Create a directory called `src` and create a file in called `index.js`.

Create a directory called `dist` and create a file in called `index.html`.



My code needs lodash so, I install the dependency locally with: ``npm i --save lodash``



If everything goes correct, with the command ``npx webpack`` you could see a new file in 
`dist` called `main.js` and `main.js.LICENSE.txt`.

If you open `index.html` in the browser you will see "Hello webpack".



**# STEP THREE** Initial webpack config

Create a file called `webpack.config.js`.

**dev-server**:  Install it with: ``npm install --save-dev webpack-dev-server``

Create a script in `package.json` to run dev-server ``"start": "webpack serve --open"``

