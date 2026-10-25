# Kittypaw

猫咪生活与照顾主题双语网站，15页、30条语言路径。首页参考 Kittypaw Header，其余区块与内页为原创同风格扩展。

## 准备与运行

Node 24.16.0、pnpm 9.15.4；版本见 `.nvmrc` 和 package.json。无数据库、密钥、账户或后端依赖。可配置 PORT、HOSTNAME；默认仅监听本机。

```
pnpm install --frozen-lockfile
pnpm dev
```

访问 http://127.0.0.1:43640 ，默认中文，英文 `/en`。Ctrl+C 停止本次服务。生产使用 `pnpm build` 后 `pnpm start`。独立页面路由由 src/app/[[...slug]]/page.tsx 解析，未知路径404。

## 能力与边界

猫咪背景视频前5秒循环，轻触后完整10秒循环；支持暂停、恢复、重置与加载错误提示。标题错峰弹簧、按钮逐字跳动、旋转跟随光标与两种菜单。三端主题布局、产品筛选、FAQ、双语客户端导航。联系表单仅当前浏览器校验，不发送、不持久化；没有真实交易、预约、医生或诊所。

## 检查与修改

`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。内容与品牌入口见 `.tpl/customization.json`，架构和修改细节见 `.tpl/docs/`。运行素材在 public/templates/kittypaw，展示截图应在 .tpl/assets。

## 当前交付限制

浏览器验证受工具限制，尚未完成真实三端截图与逐时刻动效对照。真实源码仓库：https://github.com/weelume/kittypaw-template 。展示截图尚未采集，stage保持scaffold。未发布源码ZIP，未部署，未上架。WSL类型、lint、3项测试、生产构建、30条路由200及未知路由404已通过。真实浏览器布局和动效尚未验收。验收记录见 `.tpl/docs/VERIFICATION.md`。

原参考素材权利与原创部分见 `.tpl/docs/LICENSE.md`，未确认商业再分发权。
