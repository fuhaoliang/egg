module.exports = {
  keys: "123456",
  view: {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".tpl": "nunjucks",
    },
  },
  news: {
    serverUrl: "https://gank.io/api/v2",
  },
  middleware: ["robot"],
  robot: {
    ua: [/Baiduspider/i],
  },
};
