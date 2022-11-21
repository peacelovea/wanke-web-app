```
wanke-web-app
├─ config                配置项目和插件
├─ .umirc.ts                配置文件，包含 umi 内置功能和插件的配置,优先级比config高。
├─ mock             存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
├─ public               静态资源，copy 到输出路径
├─ src
│  ├─ .umi              临时文件目录。在 umi dev 和 umi build 时会被删除并重新生成
│  ├─ access.ts             权限管理
│  ├─ app.ts                运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
│  ├─ components                全局公共组件，在项目中通用的原子组件
│  │  ├─ DescriptionGo                  二次封装的 Description 组件
│  │  ├─ FormTitle                  设置表格的 title
│  │  ├─ PageTitle                  原则上每个页面使用该组件，它用来配置页面左上角和浏览器标签的 title
│  │  ├─ ProFormGo              基于 ProTable 封装的多种表单类组件，使用时只需透传配置属性即可
│  │  │  ├─ FormTool                    基于 antd Form 封装的配置化表单,根据透传的 type 进行组件选择，可以定制所有需要的组件
│  │  │  ├─ SearchPanel                 查询面板
│  │  │  ├─ SelectGo                    Select组件
│  │  │  ├─ SubmitPanel                 提交面板
│  │  │  ├─ constants.ts                表单项设置常量(可以统一宽度等)
│  │  │  ├─ index.tsx
│  │  │  └─ interface.ts
│  │  ├─ ProTableGo             基于 ProTable 的二次封装，增强ProTable的功能
│  ├─ global.less               项目的全局样式
│  ├─ hooks             所有公共 hooks 放在此目录
│  ├─ init              会被项目入口文件调用的各种初始化模块
│  │  └─ request.ts                 全局请求配置
│  ├─ layouts               约定式路由时的全局布局文件
│  ├─ models                基于 hox model 的项目共享数据都在这里
│  ├─ pages             所有路由组件存放在这里
│  │  ├─ 403.tsx
│  │  ├─ 404.tsx
│  │  ├─ Home               首页
│  │  ├─ BusinessGroup               事业群管理模块
│  │  │  ├─ BusinessGroupAdd                    新增
│  │  │  ├─ BusinessGroupDetail                 详情
│  │  │  ├─ BusinessGroupModify                 修改
│  │  │  ├─ index.tsx
│  │  │  └─ setting.tsx                 表单或表格的配置项
│  ├─ requests              这里存放一些基于 useRequest 的公共请求模块。和 models 的区别是这里的数据会在引用的组件重新渲染时触发更新（重新发起请求）。
│  ├─ scripts               通用的 js 模块都放这里。比如 utils、constants
│  ├─ services              模块的请求方法，在这里定义
│  ├─ styles                所有公共样式放在此目录
│  └─ typings.d.ts
├─ tsconfig.json
├─ README.md
└─ yarn.lock
```
