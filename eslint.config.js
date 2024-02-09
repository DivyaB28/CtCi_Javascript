// // {
// //   "rules": {
// //     "indent": [2, 2],
// //     "quotes": [2, "single"],
// //     "linebreak-style": [2, "unix"],
// //     "semi": [2, "always"],
// //     "eqeqeq": 2
// //   },
// //   "env": {
// //     "es6": true,
// //     "node": true,
// //     "browser": true,
// //     "mocha": true
// //   },
// //   "ecmaFeatures": {
// //     "modules": true
// //   },
// //   "extends": "eslint:recommended"
// // }

import babelParser from "@babel/eslint-parser";
import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: [2, "always"],
      indent: [2, 2],
      quotes: [2, "single"],
      "linebreak-style": [2, "unix"],
      eqeqeq: 2,
      "prefer-const": "error",
    },
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.es6,
      },
      // parserOptions: {
      //   requireConfigFile: false,
      //   babelOptions: {
      //     babelrc: false,
      //     configFile: false,
      //     // your babel options
      //     presets: ["@babel/preset-env"],
      //   },
      // },
    },
  },
];
