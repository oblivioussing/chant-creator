const Service = require('egg').Service
let result = require('../model/result')

class IndexService extends Service {
  // 保存模版
  async save(body) {
    return result
  }
}

module.exports = IndexService
