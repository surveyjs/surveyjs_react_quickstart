# React + SurveyJS/SurveyJS_Editor QuickStart Source
[![Build Status][travis-badge]][travis-badge-url]

This repository holds the source code of the [survey.io quickstart with React](https://surveyjs.io/) 
and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

## Prerequisites

Node.js and npm are essential to Angular and SurveyJS development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/surveyjs/surveyjs_react_quickstart my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the server.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

## npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

[travis-badge]: https://travis-ci.org/sueveyjs/surveyjs_react_quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/sueveyjs/surveyjs_react_quickstart
