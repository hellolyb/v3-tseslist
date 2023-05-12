type foss = 'input' | 'password' | 'select' | 'datepicker'
export interface Forms {
  type: foss
  label: string
  placeholder: string
  id: number
  options?: any[]
  otherOptions?: any
  field: string
  format?: string
  'value-format'?: string
  rules?: any[]
}
export interface SearchFormConfig {
  labelWidth?: string
  colLayout?: any
  usetrForm: Forms[]
  itemStyle: object
}
