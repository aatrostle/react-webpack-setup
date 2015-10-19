# getting started with react

I took notes on an article I read regarding getting setup with react and webpack. This is the result.

## basics

- `mkdir <project-name>`
- `git init`
- `npm init (set to private)`

## build process

- `npm install webpack -g`
- `npm install webpack --save-dev`
- `vim webpack.config.js`

``` webpack.config.js
module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}
```

- `mkdir app`
- `vim app/app.js`

``` app/app.js
console.log('webpack setup!');
```
- `webpack`
- `cat dist/app.js`

## adding babel

- `npm install babel-loader --save-dev`
- `vim webpack.config.js`

``` add module object
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
}
```

- run 'webpack', see it still bundles successfully

## adding react

- `npm install react --save dev`

## setting up basic component

- `vim app/greeting.js`

``` app/greeting.js
import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  },
});
```

## using basic component
<!-- TODO update to latest syntax -->

- `vim app/app.js`

``` updating app/app.js
import React from "react";
import Greeting from "./greeting";

React.render(
  <Greeting name="World"/>,
  document.body
);
```

## adding basic index page to render react on

- `vim app/index.html`

``` app/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack + React</title>
  </head>
  <body></body>
  <script src="app.js"></script>
</html>
```

## add new html file to webpack config

- `npm install file-loader --save-dev`
- `vim webpack.config.js`

``` addmend to exports object
module.exports = {
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
}
```

``` add after first file loader object in webpack.config.js
module.exports = {
  module: {
    loaders: [
      { ... },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
}
```
- `webpack`
- view `dist/index.html` (browser)

## setup webpack server

- `npm install webpack-dev-server --global`
- `npm install webpack-dev-server --save-dev`

- `webpack-dev-server`
- visit `http://localhost:8080` in browser

## adding hot module replacement

- `npm install react-hot-loader --save-dev`
- `vim webpack.config.js`

``` add to first loaders object
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      { ... },
    ]
  }
}
```

- `webpack-dev-server --hot --inline`
- wrap line within `app/greeting.js` in `<h1>`, save and see reload in action

## wrapping things up

- `vim package.json`

``` add under scripts object
"scripts": {
  "start": "webpack-dev-server --hot --inline"
},
```

- now just run `npm start` to get to work
