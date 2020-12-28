
'use strict';

module.exports = app => {
  app.once('server', server => {
    // websocket
    console.info('服务器启动了', server);
  });
  app.on('error', (err, ctx) => {
    // report error
    console.info('服务错误', err, ctx);
  });
  app.on('request', ctx => [
    // log
    console.info('request', ctx),
  ]);
  app.on('response', ctx => {
    // 请求时长
    const used = Date.now() - ctx.starttime;
    console.info('log', used);
  });
};
