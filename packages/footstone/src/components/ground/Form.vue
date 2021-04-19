<template>
  <van-form>
    <template v-for="(item, index) in state.config" :key="index">
      <component :is="item.component" :attr="item.attr" />
    </template>
  </van-form>
</template>

<script lang="ts">
import { computed } from 'vue'
import { Form } from 'vant'
import 'vant/es/form/style'

export default {
  name: 'chant-form',
  props: {
    attr: Object
  },
  components: {
    [Form.name]: Form
  },
  setup(props) {
    const state = computed(() => props.attr)

    return { state }
  }
}
</script>

<style lang="scss" scoped></style>
