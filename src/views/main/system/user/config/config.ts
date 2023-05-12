import { SearchFormConfig } from '@/baseUI/from/types/formType'
export const userForm: SearchFormConfig = {
  labelWidth: '90px',
  colLayout: { span: 8 },
  itemStyle: { padding: '10px 40px' },
  usetrForm: [
    {
      field: 'name',
      type: 'input', // 表单类型
      label: '用户名', // 标题
      placeholder: '请输入用户名', // 输入提示信息
      id: 1
    },
    {
      field: 'realname',
      type: 'input', // 表单类型
      label: '真实姓名', // 标题
      placeholder: '请输入真实姓名', // 输入提示信息
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
      field: 'cellphone',
      type: 'input', // 表单类型
      label: '手机号码', // 标题
      placeholder: '请输入手机号码', // 输入提示信息

      id: 3
    },
    {
      field: 'enable',
      type: 'select', // 表单类型
      label: '状态', // 标题
      placeholder: '请选择状态', // 输入提示信息
      rules: [], // 表单校验
      id: 4,
      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
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
