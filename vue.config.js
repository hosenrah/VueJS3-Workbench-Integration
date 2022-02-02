const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("~", path.resolve(__dirname, "./node_modules/"));
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith("wb-")
        };
        return options;
      });
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
