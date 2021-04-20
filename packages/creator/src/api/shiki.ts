import { ElMessage } from 'element-plus'
import { Shiki } from '@chant/common/api/shiki'

const shiki = new Shiki()
// 重写message方法
shiki.customMessage = (msg: string) => {
  ElMessage.error(msg)
}

export default shiki
