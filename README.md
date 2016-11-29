# React Redux Typescript+TSX Webpack Starter Project

This project using the power and simplicity of the React, Redux, Webpack + HMR and Typescript+TSX via babel.

The technology stack used in the project:

- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) — a virtual DOM JavaScript library for rendering UI.  It's about rendering view as a function of state, making JavaScript-driven UI declarative the way HTML is declarative.
- [Redux](http://redux.js.org/) — an incredibly simple way of modelling your data app state in a single tree.
- [Redux Thunk](https://github.com/gaearon/redux-thunk) - Redux Thunk middleware allows you to write action creators that return a function instead of an action. (See: [Redux Saga](https://github.com/yelouafi/redux-saga))
- [Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7) and [webpack dev server](https://github.com/webpack/webpack-dev-server) — client-side module builder and dev server that serves the app.
- [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) — combines the best of React Hot Loader and React Transform and fixes some [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)
- [React Router v3](https://github.com/reactjs/react-router/blob/next/CHANGES.md) — to allow [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)
- [React Router Redux](https://github.com/reactjs/react-router-redux) — simple bindings to keep React Router and Redux in sync
- [npm](https://www.npmjs.com/) — package manager
- [Babel 6](http://babeljs.io/) — transpiler from ES6 / JSX to ES5, which is supported by all browsers
- [Typescript 2.0](https://www.typescriptlang.org/docs/handbook/basic-types.html) - It is a typed superset of Javascript that compiles to plain Javascript
- [Underscore](http://underscorejs.org/) — String Manipulation

## Getting Started

### Prerequisites

Support for Node.js > 5. Install the following packages globally in your system.

```sh
$ npm install -g http-server
```

### Installation

```sh
$ git clone https://github.com/thangaduraicse/react-typescript.git
$ cd react-typescript
$ npm install
```

### Proxy Configuration

If you are behind the company proxy, do the following steps.

#### NPM

Create .npmrc file in root folder

```sh
  registry=http://registry.npmjs.org
  proxy=http://proxy.company.com:8050
  https-proxy=http://proxy.company.com:8050
  http-proxy=http://proxy.company.com:8050
  strict-ssl=false
```

### White Label It

- Update name, description, author, repository in 'package.json'

### Running App

```sh
$ npm start

Goto the browser : http://localhost:3000
```
