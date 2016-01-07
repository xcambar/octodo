# Octodo [WIP]

Create ToDo lists from Github issues and Pull Requests!

This is an extension for Chrome and Firefox. As it has not been
published, you will have to build it yourself to use it.

PRs welcome. See the label "Roadmap" to know where we are and where
you can help.

# Usage

## Installation

```bash
# required node.js/io.js
# clone the repo
npm install
```

## Development

```bash
npm run dev
```

Then load unpacked extensions with `./dev`.

### Debug with Redux DevTools

We use [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension), install it from [Chrome store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for debugging.

## Build extension

```bash
# build files to './build/extension'
npm run build:extension
```

## Build firefox extension

```bash
# build files to './build/firefox'
npm run build:firefox
````
Note that it's [not possible for now to load Firefox extensions from local directories](https://bugzilla.mozilla.org/show_bug.cgi?id=1185460), so use `npm run compress:firefox` instead to generate an xpi file.

## Build & Compress ZIP file

```bash
# compress extension's build folder to extension.zip
npm run compress:extension

# compress app's build folder to app.zip
npm run compress:app

# compress firefox extension's build folder to firefox.xpi
npm run compress:firefox
```

## Load

- [Load the extension to Chrome](https://developer.chrome.com/extensions/getstarted#unpacked).
- Firefox: [Prerequisites](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Prerequisites), [Installing](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Packaging_and_installation#Installing_Your_Extension).

# Test

```bash
# test app
npm run test:app

# start Chromedriver for testing with Chrome
npm run before:test:chrome

# test Chrome extension
npm run test:chrome:extension

# test everything
npm test
```

# Kudos

It all started with https://github.com/zalmoxisus/browser-redux, so
a big big thanks to @zalmoxisus for all the boilerplate work!

# LICENSE

[MIT](LICENSE)
