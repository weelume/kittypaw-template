# 修改指南

品牌改 config/brand.ts；双语正文改 content/data.ts、about.ts、policies.ts。颜色、字号、间距改 theme.css 主题变量。产品与手记集合变更后同步详情页、meta.ts 与 template.json 页面清单。视频参数与播放控制在 components/Scene.tsx；标题和按钮参数在 Hero.tsx、Motion.tsx；导航在 Shell.tsx。新增页面独立组合在 pages，不把所有页面塞进一个视图。

三端视口1440×1000、834×1180、390×844，补测320px。截图必须来自真实运行，不用视频帧冒充。保持语言切换的当前页面、查询与锚点。演示表单不得增加隐式外发。
