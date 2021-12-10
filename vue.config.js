const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('~', path.resolve(__dirname, './node_modules/'));
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_globals.scss";
        `,
      },
    },
  },
};
