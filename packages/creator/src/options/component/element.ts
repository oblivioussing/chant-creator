import { App } from 'vue'
import {
  ElButton,
  ElDialog,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElInput,
  ElRadio,
  ElSelect,
  ElSwitch,
  ElTabs,
  ElTabPane,
  ElUpload
} from 'element-plus'

import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-dialog.css'
import 'element-plus/lib/theme-chalk/el-form.css'
import 'element-plus/lib/theme-chalk/el-form-item.css'
import 'element-plus/lib/theme-chalk/el-icon.css'
import 'element-plus/lib/theme-chalk/el-image.css'
import 'element-plus/lib/theme-chalk/el-input.css'
import 'element-plus/lib/theme-chalk/el-radio.css'
import 'element-plus/lib/theme-chalk/el-select.css'
import 'element-plus/lib/theme-chalk/el-switch.css'
import 'element-plus/lib/theme-chalk/el-tabs.css'
import 'element-plus/lib/theme-chalk/el-tab-pane.css'
import 'element-plus/lib/theme-chalk/el-upload.css'
// message
import 'element-plus/lib/theme-chalk/el-message.css'

// element组件注册
function elementLoader(app: App<Element>) {
  app.use(ElButton)
  app.use(ElDialog)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElIcon)
  app.use(ElImage)
  app.use(ElInput)
  app.use(ElRadio)
  app.use(ElSelect)
  app.use(ElSwitch)
  app.use(ElTabs)
  app.use(ElTabPane)
  app.use(ElUpload)
}

export default elementLoader
