# ProTableGo

> 基于 @ant-pro-go/table 封装的偏 tianji 业务型 Table 组件

## ProTable 新增属性说明

| 属性 | 描述 | 类型 | 默认值 | 补充说明 |
| --- | --- | --- | --- | --- |
| manualRequest | 是否需要手动触发首次请求, 配置为 true 时不可隐藏搜索表单 | boolean \|undefined | - | 1.页面首次加载，url 无参数时，不会主动执行请求；<br/> 2.点击「重置」，不会执行请求 |
