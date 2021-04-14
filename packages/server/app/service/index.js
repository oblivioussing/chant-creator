const Service = require('egg').Service
const fs = require('fs')
const path = require('path')
let result = require('../model/result')

class IndexService extends Service {
  // 保存模版
  async save(body) {
    // const url = path.join(__dirname, 'data', 'data.json')
    const ret = fs.writeFileSync('../data/data.json', JSON.stringify(body))
    console.log(ret)
    return result
  }
}

module.exports = IndexService
