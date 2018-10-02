NPM lib package example
===

[![Build Status](https://travis-ci.org/jmarceli/npm-lib-package-example.svg?branch=master)](https://travis-ci.org/jmarceli/npm-lib-package-example) [![dependencies Status](https://david-dm.org/jmarceli/npm-lib-package-example/status.svg)](https://david-dm.org/jmarceli/npm-lib-package-example) [![devDependencies Status](https://david-dm.org/jmarceli/npm-lib-package-example/dev-status.svg)](https://david-dm.org/jmarceli/npm-lib-package-example?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Read detailed description/tutorial on https://www.grzegorowski.com/publishing-npm-package-with-rollup-babel-and/.

# Overview

1. Overally this package doesn't do anything useful, it just wraps Github API endpoint with Axios
2. Code is splitted into multiple files just to should how it might be done
3. `babel-plugin-rewire` is used in tests to show how non-exported functions might be tested
4. `jest-mock-axios` packages and **__mocks__/** directory shows how to test Axios based calls

# License

[MIT](./LICENSE)

# Author

Jan Grzegorowski
