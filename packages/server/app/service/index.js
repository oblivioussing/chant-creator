const Service = require('egg').Service
const fs = require('fs')
const result = require('../model/result')

class IndexService extends Service {
  // 保存模版
  async save(body) {
    const data = JSON.stringify(body.config)
    fs.writeFileSync('./app/data/config.json', data)
    result.code = 100
    result.msg = '模版保存成功'
    return result
  }
  // 获取模版
  async find() {
    const config = fs.readFileSync('./app/data/config.json')
    result.code = 100
    result.data = config
    result.msg = '模版获取成功'
    return result
  }
}

module.exports = IndexService
