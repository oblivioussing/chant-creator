<template>
  <el-dialog
    v-model="state.visible"
    :title="state.title"
    destroy-on-close
    @close="onClose"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'thorn-dialog',
  props: {
    title: String
  },
  emits: ['open', 'close', 'next'],
  setup(props, context) {
    const state = reactive({
      visible: true,
      title: props.title
    })
    // 关闭
    function onClose() {
      context.emit('close')
    }

    return { state, onClose }
  }
}
</script>

<style lang="scss" scoped></style>
