const Service = require('egg').Service
const fs = require('fs')
const path = require('path')
let result = require('../model/result')

class IndexService extends Service {
  // 保存模版
  async save(body) {
    const data = JSON.stringify(body)
    const ret = fs.writeFileSync('./app/data/data.json', data)
    console.log(ret)
    return ret
  }
}

module.exports = IndexService
