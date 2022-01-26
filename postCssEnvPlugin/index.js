"use strict"
// internal tooling
const postcssPresetEnv = require('postcss-preset-env');

function AtImport(options) {
  options = {
    stage: 4,
    features: {},
    ...options,
  }

  return {
    postcssPlugin: "ck-postcss-preset-env",
    Once(styles, { result, atRule, postcss }) {
      const state = {
        importedFiles: {},
        hashFiles: {},
      }

      if (styles.source && styles.source.input && styles.source.input.file) {
        state.importedFiles[styles.source.input.file] = {}
      }

      // TODO check options
      const postcssPresetEnvOptions = {
        ...options
      }
      
      // process will return a promise
      return Promise.resolve(postcss([
        postcssPresetEnv(postcssPresetEnvOptions)
      ])
      .process(styles.source.input.css, {from: styles.source.input.file}))
      .then((processed) => {
        console.log(processed.css)
        // result.css = processed.css
        // styles.value = processed.css
        // console.log(styles)
        return Promise.resolve(result.css)
      })
    }
  }
}
AtImport.postcss = true
module.exports = AtImport
