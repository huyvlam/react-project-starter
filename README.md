# react-project-starter
A shortcut to create a new React project using yarn package manager

## Prerequisites:
Homebrew - /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
Yarn - brew install yarn

## React project:
mkdir PROJECT_NAME && cd PROJECT_NAME

yarn init

yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react cross-env eslint expect html-webpack-plugin jest mocha path prop-types react react-dom webpack webpack-dev-server --dev

## Installed modules:
These are typically what you need in a base react project. Feel free to add/remove modules as needed.
  * babel-core
  * babel-loader
  * babel-preset-es2015
  * babel-preset-react
  * cross-env
  * eslint
  * expect
  * html-webpack-plugin
  * jest
  * mocha
  * path
  * prop-types
  * react
  * react-dom
  * webpack
  * webpack-dev-server

## Create setting files:
touch .babelrc .gitignore .npmignore webpack.config.js
eslint --init OR ./node_modules/.bin/eslint --init (initialize locally in your project)
