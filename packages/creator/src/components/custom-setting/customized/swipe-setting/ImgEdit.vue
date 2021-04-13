<template>
  <thorn-dialog title="图片编辑" width="450px" @close="onClose">
    <el-form label-width="80px" label-position="left">
      <el-form-item label="标题:">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="描述:">
        <el-input v-model="form.describe"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接:">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="上传图片:">
        <thorn-upload :url="form.imgUrl" @change="onChange"> </thorn-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="onClose">取 消</el-button>
      <el-button @click="onSave" type="primary">确 定</el-button>
    </template>
  </thorn-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'

type Row = {
  title: string
  describe: string
  url: string
  imgUrl: string
}

export default {
  name: 'img-edit',
  props: {
    row: Object
  },
  setup(props, context) {
    // 表单
    const form = reactive(props.row as Row)
    // 确定
    function onSave() {
      context.emit('update:row', form)
      // 关闭
      onClose()
    }
    // 图片文件变化
    function onChange(row: Record<string, any>) {
      const url = URL.createObjectURL(row.raw)
      form.imgUrl = url
    }
    // 关闭
    function onClose() {
      context.emit('update:modelValue', false)
    }

    return { form, onSave, onChange, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
