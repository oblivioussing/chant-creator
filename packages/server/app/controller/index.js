'use strict'

const Controller = require('egg').Controller
let result = require('../model/result')

class IndexController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  // 保存模版
  async save() {
    const { ctx } = this
    const body = ctx.request.body
    // 参数校验
    if (!body.config || !body.config.length) {
      result.code = 101
      result.msg = '模版配置不能为空'
    } else {
      result = await ctx.service.index.save(body)
    }
    ctx.body = result
  }
}

module.exports = IndexController
