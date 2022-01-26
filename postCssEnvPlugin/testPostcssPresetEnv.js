const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

const t = postcss([
  postcssPresetEnv({
    
    stage: 2,
    // @see https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/src/lib/plugins-by-id.js#L74
    features: {
      'blank-pseudo-class': true,
      'lab-function': true,
    }
  })
]).process(
  `
  body { 
    color: lab(240 50 20);
  }
  input:blank {
    background-color: red;
  }
  nav :any-link > span {
    background-color: yellow;
  }
  `, 
  {
    from: __dirname,
  }
).then(result => {
  console.log(result.css)
}).catch(e => {
  console.error(e)
});
