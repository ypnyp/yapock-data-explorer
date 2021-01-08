# Yapock Data Explorer (YDE)

Yapock Data Explorer lets you, as the name suggests, explore and manage the
data in your Yapock Instance safely and quickly.

## Download and install

Go to the Releases page to download an already-compiled version of the YDE,
or clone this repo directly into a `yde` folder in your Yapock Instance's
`plugins` folder.

## Development server
Run `npm run start` or `ng serve` for a dev server. Navigate to
[http://localhost:4200/](http://localhost:4200/). The app will automatically
reload if you change any of the source files.

## Create new angular components

Run `ng generate component component-name` to generate a new component. You
can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in
the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/). Before running the tests make
sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## PWA ready

YDE was built with offline and progressive web app in mind.

It provides [`manifest.json`](src/manifest.json) and service worker
([`sw.js`](src/sw.js)).

In order to simplify development, service worker is not activated by default
as this may get in the way of your workflow. If you're actively working on
customizing your service worker or doing testing, remember to activate it by
uncommeting the script tag content in index.html.
