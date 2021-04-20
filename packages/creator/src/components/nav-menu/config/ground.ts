// 轮播图
const swipe = {
  component: 'chant-swipe',
  label: '轮播图',
  attr: {
    autoplay: 3000,
    loop: true,
    vertical: false,
    config: [{ title: '标题', describe: '描述', url: '', imgUrl: '' }]
  },
  style: {
    borderRadius: 0,
    height: 110,
    margin: 0,
    padding: 0,
    width: 375
  }
}
// 表单
const form = {
  component: 'chant-form',
  label: '表单',
  attr: {
    btnBgColor: '',
    btnColor: '',
    apiUrl: '',
    config: [
      {
        label: '年龄',
        field: '',
        value: '',
        type: 'number',
        placeholder: '请输入年龄'
      },
      {
        label: '爱好',
        field: '',
        value: '',
        type: 'select',
        placeholder: '请输入爱好',
        config: []
      }
    ]
  },
  style: {
    backgroundColor: '',
    padding: 10,
    width: 375
  }
}

export default [
  // 轮播图
  swipe,
  // 表单
  form,
  // 图片
  {
    component: 'chant-img',
    label: '图片',
    style: {
      width: '100%'
    }
  },
  // 按钮
  {
    component: 'chant-button',
    label: '按钮',
    style: {
      fontSize: 16,
      fontWeight: 'normal',
      height: 44,
      width: 345
    }
  },
  // 输入框
  {
    component: 'chant-field',
    label: '输入框',
    style: {
      fontSize: 16,
      fontWeight: 'normal',
      height: 44
    }
  },
  // 文本
  {
    component: 'chant-text',
    label: '文本',
    style: {
      display: 'inline-block',
      fontSize: 16,
      fontWeight: 'normal',
      padding: 5
    }
  }
]
