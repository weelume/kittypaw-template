# 修改指南

品牌改 config/brand.ts；双语正文改 content/data.ts、about.ts、policies.ts。颜色、字号、间距改 theme.css 主题变量。产品与手记集合变更后同步详情页、meta.ts 与 template.json 页面清单。视频参数与播放控制在 components/Scene.tsx；标题和按钮参数在 Hero.tsx、Motion.tsx；导航在 Shell.tsx。新增页面独立组合在 pages，不把所有页面塞进一个视图。

三端视口1440×1000、834×1180、390×844，补测320px。截图必须来自真实运行，不用视频帧冒充。保持语言切换的当前页面、查询与锚点。演示表单不得增加隐式外发。
# 整页滚动条

`src/features/site-templates/catalog/kittypaw/scrollbar.css` 集中管理桌面原生滚动条：8px 轨道、圆角鼠尾草绿滑块，悬停与拖动加深。Firefox 使用标准 thin 宽度与主题色。颜色变量限定于实际包含 `.kp-root` 的文档，离开模板后不影响其他页面。触屏与强制高对比模式保留浏览器原有表现；不改变滚轮、键盘、拖动或滚动容器。

