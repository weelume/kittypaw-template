import type { SiteTemplate, TemplateScreenshot } from '../../types'
const screenshots: [TemplateScreenshot, ...TemplateScreenshot[]] = [
  {
    "src": "/templates/kittypaw/screenshots/desktop-home.webp",
    "alt": "Kittypaw 首页 · desktop 真实网页截图",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/kittypaw/screenshots/desktop-products.webp",
    "alt": "Kittypaw 猫咪好物 · desktop 真实网页截图",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/kittypaw/screenshots/desktop-journal.webp",
    "alt": "Kittypaw 养猫手记 · desktop 真实网页截图",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/kittypaw/screenshots/desktop-contact.webp",
    "alt": "Kittypaw 联系 · desktop 真实网页截图",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/kittypaw/screenshots/tablet-home.webp",
    "alt": "Kittypaw 首页 · tablet 真实网页截图",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/kittypaw/screenshots/tablet-products.webp",
    "alt": "Kittypaw 猫咪好物 · tablet 真实网页截图",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/kittypaw/screenshots/tablet-journal.webp",
    "alt": "Kittypaw 养猫手记 · tablet 真实网页截图",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/kittypaw/screenshots/tablet-contact.webp",
    "alt": "Kittypaw 联系 · tablet 真实网页截图",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/kittypaw/screenshots/mobile-home.webp",
    "alt": "Kittypaw 首页 · mobile 真实网页截图",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/kittypaw/screenshots/mobile-products.webp",
    "alt": "Kittypaw 猫咪好物 · mobile 真实网页截图",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/kittypaw/screenshots/mobile-journal.webp",
    "alt": "Kittypaw 养猫手记 · mobile 真实网页截图",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/kittypaw/screenshots/mobile-contact.webp",
    "alt": "Kittypaw 联系 · mobile 真实网页截图",
    "device": "mobile",
    "width": 390,
    "height": 844
  }
]
export const kittypawTemplate: SiteTemplate = {
  id: 'kittypaw', gitUrl: 'https://github.com/weelume/kittypaw-template', name: 'Kittypaw · 猫咪生活与照顾', localizedNames: { en: 'Kittypaw · Cat care and essentials' },
  sceneId: 'corporate-site', listed: false, tags: ['宠物照顾', '猫咪视频', '互动场景', '双语', 'PC / iPad / H5'],
  summary: '猫咪仰视视频、点击继续散步、旋转光标和逐词弹簧标题，含好物、洗护、健康、手记与联系。',
  accentColor: '#18352e', cover: '/templates/kittypaw/screenshots/desktop-home.webp',
  screenshots,
  surfaces: [{ id: 'site', name: '宠物照顾官网', platform: 'pc', locales: ['zh', 'en'], pages: [
    { slug: "", title: "首页", localizedTitles: { en: "Home" }, load: () => import('./pages/HomePage') },
    { slug: "about", title: "关于我们", localizedTitles: { en: "About us" }, load: () => import('./pages/AboutPage') },
    { slug: "products", title: "猫咪好物", localizedTitles: { en: "Cat essentials" }, load: () => import('./pages/ProductsPage') },
    { slug: "products/window-perch", title: "阳光窗边躺椅", localizedTitles: { en: "Sunny window perch" }, load: () => import('./pages/PerchPage') },
    { slug: "products/play-kit", title: "好奇心玩耍组合", localizedTitles: { en: "Curious play kit" }, load: () => import('./pages/PlayPage') },
    { slug: "products/daily-bowl", title: "日常陶瓷食碗", localizedTitles: { en: "Everyday ceramic bowl" }, load: () => import('./pages/BowlPage') },
    { slug: "grooming", title: "温柔洗护", localizedTitles: { en: "Cat grooming" }, load: () => import('./pages/GroomingPage') },
    { slug: "wellness", title: "日常健康", localizedTitles: { en: "Wellness" }, load: () => import('./pages/WellnessPage') },
    { slug: "vet-programs", title: "兽医关怀", localizedTitles: { en: "Vet programs" }, load: () => import('./pages/VetPage') },
    { slug: "journal", title: "养猫手记", localizedTitles: { en: "Cat journal" }, load: () => import('./pages/JournalPage') },
    { slug: "journal/a-window-of-their-own", title: "给猫咪一扇自己的窗", localizedTitles: { en: "A window of their own" }, load: () => import('./pages/WindowArticlePage') },
    { slug: "journal/ten-minutes-of-play", title: "认真陪它玩", localizedTitles: { en: "Ten minutes of play" }, load: () => import('./pages/PlayArticlePage') },
    { slug: "contact", title: "联系我们", localizedTitles: { en: "Contact us" }, load: () => import('./pages/ContactPage') },
    { slug: "privacy", title: "隐私政策", localizedTitles: { en: "Privacy policy" }, load: () => import('./pages/PrivacyPage') },
    { slug: "terms", title: "使用条款", localizedTitles: { en: "Terms of use" }, load: () => import('./pages/TermsPage') }
  ] }],
}
