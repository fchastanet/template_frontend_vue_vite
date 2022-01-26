import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssImport from 'postcss-import'
import cssnano from 'cssnano'
import PostCssPresetEnvPlugin from './postCssEnvPlugin/index.js'
import postcssPresetEnv from 'postcss-preset-env'

// import postcssLoadConfig from 'postcss-load-config'
const postcssPresetEnvPlugins = postcssPresetEnv({
  stage: 2,
  // @see https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/src/lib/plugins-by-id.js#L74
  features: {
    'blank-pseudo-class': true,
    'lab-function': true,
  }
})
console.dir(postcssPresetEnvPlugins)
const postCssPlugins = [
  postCssImport(),
  /*PostCssPresetEnvPlugin({
    stage: 2,
    // @see https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/src/lib/plugins-by-id.js#L74
    features: {
      'blank-pseudo-class': true,
      'lab-function': true,
    }
  }),*/
  // cssnano(),
  //@ts-ignore
  ...postcssPresetEnvPlugins.plugins
]

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081,
    host: '0.0.0.0',
    open: false,
    // hmr: {
    //   host: '0.0.0.0',
    //   port: 3010,
    // },
  },
  css: { 
    postcss: {
      plugins: postCssPlugins
    }
  },
  plugins: [
    vue(),
  ]
})
