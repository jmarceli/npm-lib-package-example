NPM lib package example
===

[![Build Status](https://travis-ci.org/jmarceli/npm-lib-package-example.svg?branch=master)](https://travis-ci.org/jmarceli/npm-lib-package-example) [![dependencies Status](https://david-dm.org/jmarceli/npm-lib-package-example/status.svg)](https://david-dm.org/jmarceli/npm-lib-package-example) [![devDependencies Status](https://david-dm.org/jmarceli/npm-lib-package-example/dev-status.svg)](https://david-dm.org/jmarceli/npm-lib-package-example?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Read detailed description/tutorial on https://www.grzegorowski.com/publishing-npm-package-with-rollup-babel-and/.

# Overview

1. Overally this package doesn't do anything useful, it just wraps Github API endpoint with Axios
2. Code is splitted into multiple files just to should how it might be done
3. `babel-plugin-rewire` is used in tests to show how non-exported functions might be tested
4. `jest-mock-axios` packages and **__mocks__/** directory shows how to test Axios based calls

# Installation

```
yarn add npm-lib-package-example
```

# Usage

Despite the fact that this package has no point to exists, you may still use it in your script.
Start your file with `// @flow` if you are using Flow type checking.

```
// @flow

const getRateLimitResponse = require('npm-lib-package-example').getRateLimitResponse;
// or with Babel: import { getRateLimitResponse } from 'npm-lib-package-example';

const start = async () => {
  const result = await getRateLimitResponse();
  console.log(result);
};

start();
```

# License

[MIT](./LICENSE)

# Author

Jan Grzegorowski
