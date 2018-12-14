const drinks = require('./static/drinks.json');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: async function(defaultPathMap) {
    Object.keys(drinks).forEach(basename => {
      defaultPathMap[`/drinks/${basename}`] = {
        page: '/drinks',
        query: {d: basename},
      };
    });

    return defaultPathMap;
  },
});
