## Angualr 应用中的状态管理
[官方地址](https://ngrx.io/docs)
![avatar](./images/state-management-lifecycle.png)

## 什么是 NgRx
NgRx 是一个基于 angualr 应用上的框架。
- 管理全局和本地的状态
- 隔离副作用，以隔离更干净的组件体系结构
- 实体收集管理
- 与 angualr 路由集成
- 在构建许多不同类型的应用程序时增强开发人员体验的开发人员工具。

### NgRx 包
分为几个主要的类别

#### State （状态）
- Store - 受到 Redux 的启发，RxJS 为 angualr 应用提供了全局状态管理
- Effects - @ngrx/store 的副作用模型
- Router Store - 绑定连接 Angular 路由器到 @ngrx/store。
- Entity - 用于管理记录集合的实体状态适配器。
- ComponentStore - 用于管理本地/组件状态的独立库。

#### Data（数据）
- Data - 简化实体数据管理的扩展。

#### View（视图）
- Component - 完全反应 Angualr 应用的扩展。

#### Developer Tooling（开发者工具）
- Store Devtools - 用于@ngrx/store的仪表，可以实现状态的可视化跟踪和时间旅行调试。
- Schematics - 用于使用 NgRx 库的 Angular 应用程序的脚手架库。