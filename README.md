NodeJS module template
======================

## Getting Started ##

**Install**

Run the following command to clone the NodeJS module template and kick-start your new npm module:

	git clone https://github.com/damyanbogoev/nodejs-module-init.git

This module template requires the following npm packages installed globally:

- grunt-cli;
- grunt;
- mocha;

You could install them using this command:

	npm install package-name -g

The module dependencies should be installed using:
	
	npm install

## grunt tasks ##

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

To start the watch grunt task which internally executes the jshint and mocha (test) tasks, you should run the following command:

	grunt 

If you consider adding a new folder to your module and you want to watch its content for changes you should modify the watch task under the Gruntfile.js by adding your new folder to the files collection:

	...
	watch : {
        files : ['lib/**/*.js', 'model/**/*.js', 'test/**/*.js'],
        tasks : ['jshint', 'mocha']
    }
	...