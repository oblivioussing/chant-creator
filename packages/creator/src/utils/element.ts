import { Ref } from 'vue'

export default {
  // 表单校验
  validate(ref: Ref): Promise<boolean> {
    return new Promise((resolve) => {
      ref.value.validate((valid: boolean) => {
        resolve(valid)
      })
    })
  }
}
