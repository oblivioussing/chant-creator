<template>
  <div>
    <div class="nav-bar">
      <el-button @click="onTemplateSave" type="primary" size="small">
        保存模版
      </el-button>
    </div>
    <!-- 保存模版 -->
    <template-save v-if="state.templateVisible" v-model="state.templateVisible">
    </template-save>
    <test v-if="state.testVisible" v-model:visible="state.testVisible"> </test>
    {{ state.testVisible }}
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import TemplateSave from './TemplateSave.vue' // 保存模版
import Test from './Test.vue'

export default {
  name: 'nav-bar',
  components: { TemplateSave, Test },
  setup() {
    const state = reactive({
      templateVisible: false,
      testVisible: false
    })
    // 保存
    function onTemplateSave() {
      state.testVisible = true
    }

    return { state, onTemplateSave }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  position: relative;
}
</style>
