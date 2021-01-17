## @magic-themes/slides

foundational [@magic-theme](https://magic-themes.github.io/) for presentation slides.

pages this theme is used on:
[@magic](https://slides.webboot.org)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-themes/slides.svg
[npm-url]: https://www.npmjs.com/package/@magic-themes/slides
[travis-image]: https://img.shields.io/travis/com/magic-themes/slides/master
[travis-url]: https://travis-ci.com/magic-themes/slides
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/slides/master.svg
[appveyor-url]: https://ci.appveyor.com/slides/magicthemes/slides/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-themes/slides/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-themes/slides
[greenkeeper-image]: https://badges.greenkeeper.io/magic-themes/slides.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-themes/slides.svg
[snyk-image]: https://snyk.io/test/github/magic-themes/slides/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-themes/slides

#### install:
```bash
npm install --save --save-exact @magic-themes/slides
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: 'slides',

  // multiple themes
  // THEME: [...other themes, 'slides'],
}
```

@magic will then import and use the theme automagically.

##### overwrite
you can overwrite any style in this theme with your own.

create /assets/themes/slides/index.mjs, any css there will overwrite the theme css

#### changelog

##### 0.0.1
first release

##### 0.0.2
bump required node version to 14.15.4

##### 0.0.3 - unreleased
...