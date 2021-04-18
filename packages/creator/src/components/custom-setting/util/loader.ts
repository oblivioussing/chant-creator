import { defineAsyncComponent } from 'vue'

const AttrSetting = defineAsyncComponent(() => import('../AttrSetting.vue'))
const StyleSetting = defineAsyncComponent(() => import('../StyleSetting.vue'))
const SwipeSetting = defineAsyncComponent(
  () => import('../customized/swipe-setting/SwipeSetting.vue')
)
const FormSetting = defineAsyncComponent(
  () => import('../customized/form-setting/FormSetting.vue')
)

export default {
  AttrSetting,
  StyleSetting,
  SwipeSetting,
  FormSetting
}
