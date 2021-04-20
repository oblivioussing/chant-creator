<template>
  <van-form label-width="50" class="chant-form">
    <chant-field
      v-for="(item, index) in state.config"
      :key="index"
      :name="item.type"
      :label="item.label"
    >
    </chant-field>
    <div class="btn">
      <chant-button round block type="primary"> 提交 </chant-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { computed } from 'vue'
import { Cell, CellGroup, Form } from 'vant'
import 'vant/es/cell/style'
import 'vant/es/cell-group/style'
import 'vant/es/form/style'

export default {
  name: 'chant-form',
  props: {
    attr: Object
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Form.name]: Form
  },
  setup(props) {
    const state = computed(() => props.attr)
    // 是否包含popup
    function hasPopup(val: string) {
      return ['select', 'date'].includes(val)
    }

    return { state, hasPopup }
  }
}
</script>

<style lang="scss" scoped>
.chant-form {
  .van-cell {
    padding: 16px;
  }
  .btn {
    margin-top: 25px;
  }
}
</style>
