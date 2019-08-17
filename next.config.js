const drinks = require('./static/data/drinks.json');
const withSass = require('@zeit/next-sass');
const exec = require('child_process').exec;
// const WebpackShellPlugin = require('webpack-shell-plugin');

const tags = new Set();
Object.keys(drinks).forEach(d => {
  drinks[d].tags.forEach(t => tags.add(t));
});

const techniques = [
  'shaking',
]

module.exports = withSass({
  exportPathMap: async function(defaultPathMap) {
    Object.keys(drinks).forEach(basename => {
      defaultPathMap[`/drinks/${basename}`] = {
        page: '/drinks',
        query: {d: basename},
      };
    });
    tags.forEach(tag => {
      defaultPathMap[`/tags/${tag}`] = {
        page: '/tags',
        query: {tag: tag},
      }
    });
    techniques.forEach(t => {
      defaultPathMap[`/techniques/${t}`] = {
        page: '/techniques',
        query: {technique: t}
      }
    })

    return defaultPathMap;
  },
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
});
