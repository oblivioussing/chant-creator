<template>
  <van-picker title="标题" :columns="columns" @confirm="onConfirm" />
</template>

<script lang="ts">
import { Picker } from 'vant'
import 'vant/es/picker/style'

export default {
  name: 'chant-picker',
  components: {
    [Picker.name]: Picker
  },
  setup() {
    const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']
    // 确定
    function onConfirm() {}

    return { columns, onConfirm }
  }
}
</script>

<style lang="scss" scoped></style>
