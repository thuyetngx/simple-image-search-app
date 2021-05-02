# Demo
[See Demo Here](https://thuyetngx.github.io/)
# Features
[See Here](https://github.com/thuyetngx/simple-image-search-app/blob/master/CHANGELOG.md)


# Getting started

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```
 
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```
 
# Project structure

```
dist/                        compiled version
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (singleton services and single-use components)
|  |- @shared/               shared module  (common components, directives and pipes)
|  |- pages/                 all pages components
|  |- model/                 all model
|  |- services/              all services
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start                     | Run development server on `http://localhost:4200/`
npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder
npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)
npm run lint                  | Lint code

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.


## Time summary
* **Preparation**: 30 minutes
* **Coding**: 30 minutes
* **Styling**: 30 minutes
* **Building and testing**: 15 minutes
* **Grand total**: 1 hour 45 minutes
