const Service = require("egg").Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    const { data } = await this.ctx.curl(`${serverUrl}/categories/Article`, {
      timeout: 1000 * 10,
      dataType: "json",
    });
    return data.data;
  }
}

module.exports = NewsService;
