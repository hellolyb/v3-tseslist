import { SearchFormConfig } from '@/baseUI/from/types/formType'
export const roleForm: SearchFormConfig = {
  labelWidth: '90px',
  colLayout: { span: 8 },
  itemStyle: { padding: '10px 40px' },
  usetrForm: [
    {
      field: 'name',
      type: 'input', // 表单类型
      label: '角色名称', // 标题
      placeholder: '请输入角色名称', // 输入提示信息
      id: 1
    },
    {
      field: 'realname',
      type: 'input', // 表单类型
      label: '权限介绍', // 标题
      placeholder: '请输入权限介绍', // 输入提示信息
      id: 2,
      rules: [
        {
          pattern: /^[\u4E00-\u9FA5]{2,6}(·[\u4E00-\u9FA5]{2,10}){0,2}$/,
          message: '王腾是骚货',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker', // 表单类型
      label: '创建时间', // 标题
      placeholder: '', // 输入提示信息
      rules: [], // 表单校验
      id: 5,
      'value-format': 'YYYY-MM-DD',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ]
}
