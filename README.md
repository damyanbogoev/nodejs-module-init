NodeJS module template
======================
http://www.damyanon.net/nodejs-module-init/
## Getting Started ##

**Install**

Run the following command to clone the NodeJS module template and kick-start your new npm module:

	git clone https://github.com/damyanbogoev/nodejs-module-init.git

The module dependencies should be installed using:
	
	npm install

**NOTE: You should remove the .git folder and modify the README.md file deployed with the module template.**

## Must-Have Node Module Packages ##

This module template requires the following module packages installed globally:

- grunt-cli;
- mocha;

You could install them using this command:

	npm install package-name -g

## Grunt tasks ##

**JSHint**

Run the following command to validate your javascript files with JSHint:

	grunt jshint

If you consider adding a new folder to your module and you want to validate its js files you should modify the jshint task under the Gruntfile.js by adding your new folder to the files collection:

	...
	jshint: {
        files : ['lib/**/*.js', 'model/**/*.js', 'test/**/*.js'],
    },
	...

**Tests**

Run the following command to execute your test suite:
	
	grunt mocha

**Watch**

To start the watch Grunt task which internally executes the jshint and mocha (test) tasks, you should run the following command:

	grunt 

If you consider adding a new folder to your module and you want to watch its content for changes you should modify the watch task under the Gruntfile.js by adding your new folder to the files collection:

	...
	watch : {
        files : ['lib/**/*.js', 'model/**/*.js', 'test/**/*.js'],
        tasks : ['jshint', 'mocha']
    }
	...
