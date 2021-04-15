<template>
  <thorn-dialog title="保存模版" width="450px" @close="onClose">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="90px">
      <el-form-item label="模版名称:" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="模版分类:">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="封面设置:">
        <el-button type="primary" size="small"> 一键生成封面 </el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="onClose">取 消</el-button>
      <el-button @click="onSave" :loading="state.loading" type="primary">
        确 定
      </el-button>
    </template>
  </thorn-dialog>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import shiki from '@chant/common/api/shiki'
import { core } from '@chant/common/utils'
import element from '@/utils/element'
import { ElMessage } from 'element-plus'

export default {
  name: 'template-save',
  props: {
    row: Object
  },
  setup(props, context) {
    const store = useStore()
    // state
    const state = reactive({
      loading: false
    })
    // form
    const form = reactive({
      name: '', // 模版名称
      type: '', // 模版分类
      config: null // 配置
    })
    const formRef = ref(null)
    // rules
    const rules = reactive({
      name: [{ required: true, message: '请输入模版名称', trigger: 'change' }]
    })
    // 保存
    async function onSave() {
      // 表单校验
      const isVali = await element.validate(formRef)
      if (!isVali) {
        return
      }
      // 参数
      const componentList = store.state.editor.componentList
      const params = core.clone(form)
      params.config = componentList
      // 请求
      state.loading = true
      const ret = await shiki.postCode('template/save', params)
      state.loading = false
      if (core.isSuccess(ret)) {
        ElMessage.success('模版保存成功')
        // 关闭
        onClose()
      }
    }
    // 关闭
    function onClose() {
      context.emit('update:modelValue', false)
    }

    return { state, form, formRef, rules, onSave, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
