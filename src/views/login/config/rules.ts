import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
export const rules = reactive<FormRules>({
  name: [
    { required: true, message: '必须输入账号', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,20}$/,
      message: '请输入6到20位的数字字母的账号',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur' },
    {
      pattern: /^[0-9]{3,}$/,
      message: '请输入三位以上的数字密码',
      trigger: 'blur'
    }
  ]
})
