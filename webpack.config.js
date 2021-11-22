module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader",{
          loader: 'sass-loader',
          options: {
            data: `
              @import "@/assets/scss/style.scss";
            `
          }
        }],
      },
    ],
  },
};
