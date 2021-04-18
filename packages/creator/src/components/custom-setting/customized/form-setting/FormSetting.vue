<template>
  <el-form-item label="标题">
    <el-input v-model="currentAttr.title"></el-input>
  </el-form-item>
  <el-form-item label="标题大小">
    <el-input v-model="currentAttr.titleSize"></el-input>
  </el-form-item>
  <el-form-item label="标题颜色">
    <el-color-picker v-model="currentAttr.titleColor" size="small">
    </el-color-picker>
  </el-form-item>
  <el-form-item label="标题字重">
    <font-weight-select v-model="currentAttr.titleWeight"> </font-weight-select>
  </el-form-item>
  <el-form-item label="背景色">
    <el-color-picker v-model="currentAttr.btnColor" size="small">
    </el-color-picker>
  </el-form-item>
  <el-form-item label="api地址">
    <el-input v-model="currentAttr.apiUrl"></el-input>
  </el-form-item>
</template>

<script lang="ts">
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import FontWeightSelect from '../../common/FontWeightSelect.vue'

export default {
  name: 'form-setting',
  components: { FontWeightSelect },
  setup() {
    const store = useStore()
    // state
    const state = reactive({})
    // current
    const currentAttr = computed(() => store.state.editor.current.attr)

    return { state, currentAttr }
  }
}
</script>

<style lang="scss" scoped></style>
