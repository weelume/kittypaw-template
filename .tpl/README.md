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

## 截图与验收范围

1.0.1已将视频帧占位改为真实网页截图：Windows Chrome隔离无头进程采集PC1440×1000、iPad834×1180、H5390×844，覆盖首页、好物、手记和联系共12张。等字体加载和入场动画结束后原尺寸截图；截图范围无横向溢出、损坏图片或页面脚本异常。截图位于.tpl/assets，由共享包生成至运行截图路径。

真实源码仓库：https://github.com/weelume/kittypaw-template 。模板资料已具备真实截图，stage=ready。完整交互与动效逐时刻对照仍未完成，不能宣称完整复刻验收。详细命令与边界见.tpl/docs/VERIFICATION.md。原参考素材商业再分发权仍待核实，未部署或上架。
