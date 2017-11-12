# react-project-starter
Setup react project using yarn, webpack, babel. Also included are samples—configurations, starter template, folders structure.

### Prerequisites:
Homebrew:
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Yarn:
brew install yarn

### React project:
mkdir PROJECT_NAME && cd PROJECT_NAME

yarn init

yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react cross-env eslint expect html-webpack-plugin jest mocha path prop-types webpack webpack-dev-server --dev

yarn add react react-dom react-redux react-router-redux redux redux-saga

### Installed modules:
These are typically what you need in a base react project. Feel free to add/remove modules as needed.
  * babel-core
  * babel-loader
  * babel-preset-env
  * babel-preset-react
  * cross-env
  * eslint (optional)
  * expect (optional)
  * html-webpack-plugin (optional)
  * jest (optional)
  * mocha (optional)
  * path
  * prop-types (optional)
  * webpack
  * webpack-dev-server
  * react
  * react-dom
  * react-redux (optional)
  * react-router-redux (optional)
  * redux redux-saga (optional)
  * redux-saga (optional)

### Setting files:
touch .babelrc .gitignore .npmignore webpack.config.js

eslint --init OR ./node_modules/.bin/eslint --init (initialize locally in the project root directory)

### Run project
yarn start
