# 架构

Next.js App Router + strict TypeScript + React + Framer Motion；复用既有依赖版本。src/features/site-templates/catalog/kittypaw 下：config/brand.ts 维护品牌，content 维护双语正文，theme.css 维护令牌和响应式，components 维护视频、导航、卡片、表单与动效，pages 负责页面组合，meta.ts 注册页面，routing.ts 负责纯路径变换。host.tsx 提供可选品牌注入。运行素材只引用本站路径。无数据库、外部API、消息发送或持久化。
