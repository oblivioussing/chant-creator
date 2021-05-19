<template>
  <el-form-item label="api地址">
    <el-input v-model="currentAttr.apiUrl"></el-input>
  </el-form-item>
  <div>表单控件</div>
  <div
    v-for="(item, index) in currentAttr.config"
    :key="index"
    class="form-widget"
  >
    <i class="el-icon-remove-outline ic"></i>
    <div class="label">{{ item.label }}</div>
    <div class="controll">{{ item.placeholder }}</div>
    <i class="el-icon-edit ic"></i>
  </div>
  <el-popover placement="left" :width="122" trigger="click">
    <template #reference>
      <el-button type="primary" class="form-widget-add">添加</el-button>
    </template>
    <el-button type="primary" size="small">文本框</el-button>
    <el-button type="primary" size="small">长文本框</el-button>
    <el-button type="primary" size="small">数值</el-button>
    <el-button type="primary" size="small">单选框</el-button>
    <el-button type="primary" size="small">下拉选择框</el-button>
    <el-button type="primary" size="small">日期框</el-button>
    <el-button type="primary" size="small">纯文本</el-button>
  </el-popover>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'form-setting',
  setup() {
    const store = useStore()
    // current
    const currentAttr = computed(() => store.state.editor.current.attr)

    return { currentAttr }
  }
}
</script>

<style lang="scss" scoped>
.form-widget {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 25px 0;
  .ic {
    cursor: pointer;
  }
  .label {
    padding-left: 5px;
    width: 93px;
  }
  .controll {
    color: $silver-chalice;
    flex: 1;
  }
}
.form-widget-add {
  margin-bottom: 15px;
  width: 100%;
}
</style>
