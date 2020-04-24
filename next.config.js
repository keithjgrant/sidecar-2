const withSass = require('@zeit/next-sass');
const exec = require('child_process').exec;
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
// const WebpackShellPlugin = require('webpack-shell-plugin');
const drinks = require('./static/data/drinks.json');

const tags = new Set();
Object.keys(drinks).forEach(d => {
  if (!drinks[d].tags) {
    return;
  }
  drinks[d].tags.forEach(t => tags.add(t));
});

// const techniques = [
//   'building',
//   'shaking',
//   'stirring',
//   'straining',
//   'twist',
//   'sour',
// ];
// const ingredients = [
//   'vermouth',
//   'gin',
//   'simple-syrup',
//   'butter-syrup',
//   'burnt-sugar-syrup',
// ];

module.exports = withMDX(
  withSass({
    // exportPathMap: async function(defaultPathMap) {
    //   const newMap = { ...defaultPathMap };
    //   Object.keys(drinks).forEach(basename => {
    //     newMap[`/drinks/${basename}`] = {
    //       page: `/drinks/${basename}`,
    //       query: { drink: basename },
    //     };
    //   });
    //   // tags.forEach(tag => {
    //   //   defaultPathMap[`/tags/${tag}`] = {
    //   //     page: '/tags',
    //   //     query: { tag: tag },
    //   //   };
    //   // });
    //   // techniques.forEach(t => {
    //   //   defaultPathMap[`/techniques/${t}`] = {
    //   //     page: '/techniques',
    //   //     query: { technique: t },
    //   //   };
    //   // });
    //   // ingredients.forEach(t => {
    //   //   defaultPathMap[`/ingredients/${t}`] = {
    //   //     page: '/ingredients',
    //   //     query: { ingredient: t },
    //   //   };
    //   // });
    //
    //   return newMap;
    // },
    webpack: config => {
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push({
        apply: compiler => {
          compiler.hooks.watchRun.tap('BuildDataFile', () => {
            exec('npm run data', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          });
        },
      });

      return config;
    },
    exportTrailingSlash: true,
  })
);
