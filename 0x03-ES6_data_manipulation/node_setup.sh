#!/usr/bin/env bash
sudo npm init -y
sudo npm install --save-dev jest
sudo npm install --save-dev babel-jest @babel/core @babel/present-env
sudo npm install --save-dev eslint

sudo npm init -y #initialise npm

# setup depencies config files

printf %s "
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
}" >> .eslintrc.js

printf %s "
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
" >> babel.config.js

#curl https://pastebin.com/raw/aLD9uYUB >> package.json

# Install dependencies
sudo npm install