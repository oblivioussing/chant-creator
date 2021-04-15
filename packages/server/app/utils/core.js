const fs = require('fs')
const path = require('path')

module.exports = {
  //延时
  sleep: async (time) => {
    return new Promise((resovle) => {
      setTimeout(() => {
        resovle()
      }, time)
    })
  },
  //同步创建文件夹
  mkdirsSync: (dirname) => {
    mkdirsingSync(dirname)
  }
}
//同步创建文件夹
const mkdirsingSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsingSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}
