import type { Bilingual } from '../config/brand'
const bi = (zh: string, en: string): Bilingual => ({ zh, en })
export const navigation = [
  { slug: '', label: bi('首页', 'Home') },
  { slug: 'products', label: bi('猫咪好物', 'Premium products') },
  { slug: 'grooming', label: bi('温柔洗护', 'Cat grooming') },
  { slug: 'wellness', label: bi('日常健康', 'Wellness & health') },
  { slug: 'vet-programs', label: bi('兽医关怀', 'Vet programs') },
  { slug: 'about', label: bi('关于我们', 'About us') },
  { slug: 'journal', label: bi('养猫手记', 'Cat journal') },
  { slug: 'contact', label: bi('联系我们', 'Contact us') },
] as const
export const copy = {
  menu: bi('菜单', 'Menu'), close: bi('关闭菜单', 'Close menu'),
  heroLines: { zh: [['猫咪的每一份'], ['喜欢 都被珍爱']], en: [['Everything', 'Your'], ['Cats', 'Love']] },
  intro: bi('从安心好物到温柔洗护与日常健康陪伴，让每一只猫咪都自在生活。', 'Playful Pet Care offers trusted wellness, grooming, and vet-backed health programs so your furry life.'),
  explore: bi('探索猫咪好物', 'Explore Products'),
  trusted: bi('人与猫咪 喜欢在这里相遇', 'People & Pets love shopping here'),
  metric: '648+', metricNote: bi('参考设计展示数据', 'Reference design demo figure'),
  continue: bi('轻触场景 让猫咪继续散步', 'Touch the scene to continue the cat walk'),
  cursor: bi('轻触继续 · 陪猫散步 ·', 'Touch to Continue • Walk Cat •'),
  pause: bi('暂停场景', 'Pause scene'), play: bi('播放场景', 'Play scene'),
  reset: bi('重新开始', 'Restart walk'),
  failed: bi('场景视频加载失败，请重试', 'The scene video could not load. Please retry.'),
  retry: bi('重试视频', 'Retry video'),
  demo: bi('演示网站：好物、服务与内容仅作展示，暂不提供交易或真实预约。', 'Demo website: products, services and editorial content are illustrative. No checkout or real booking.'),
  section: bi('陪伴猫咪的每一天', 'Made for a life with cats'),
  sectionIntro: bi('尊重它的节奏，照顾每一个小小需要。从一扇晒太阳的窗，到一次不慌张的洗护。', 'Respect their rhythm. Care for the little things, from a sunny window to a calmer grooming day.'),
  discover: bi('了解更多', 'Discover more'),
  read: bi('阅读手记', 'Read the story'),
  contact: bi('聊聊猫咪的需要', 'Let’s talk about your cat'),
  journal: bi('把养猫日常 过得更从容', 'Little notes for happier cats'),
  faq: bi('你可能想知道', 'A few things you might wonder'),
  allProducts: bi('所有好物', 'All essentials'),
  category: bi('好物分类', 'Filter essentials'),
  noProducts: bi('该分类暂无好物', 'No essentials in this category'),
} as const
export const products = [
  { id: 'window-perch', category: 'rest', name: bi('阳光窗边躺椅', 'The sunny window perch'), subtitle: bi('把舒服的位置 留给它', 'Their own little place in the sun'), description: bi('柔软的可拆洗织物和开放视野，为看鸟、晒太阳与午睡留一处安静角落。', 'Washable soft fabric and an open view make a quiet corner for birdwatching, sunbathing and afternoon naps.'), price: bi('演示参考 ¥268', 'Demo guide $38'), shape: 'perch', facts: [bi('可拆洗软垫', 'Removable washable cushion'), bi('圆润边缘', 'Rounded edges'), bi('请按实际承重选择', 'Check the actual weight rating')] },
  { id: 'play-kit', category: 'play', name: bi('好奇心玩耍组合', 'The curious play kit'), subtitle: bi('每天十分钟 快乐很简单', 'A little play goes a long way'), description: bi('逗猫棒、布球与藏食小游戏，让狩猎天性有温柔出口。陪玩时请保持看护，收好绳线。', 'A teaser, fabric ball and food puzzle offer a gentle outlet for hunting instincts. Supervise play and put strings away afterwards.'), price: bi('演示参考 ¥128', 'Demo guide $18'), shape: 'play', facts: [bi('互动陪玩', 'Interactive play'), bi('多种触感', 'Different textures'), bi('使用后收好绳线', 'Store strings after use')] },
  { id: 'daily-bowl', category: 'care', name: bi('日常陶瓷食碗', 'The everyday ceramic bowl'), subtitle: bi('好好吃饭 慢慢长大', 'Small rituals, everyday comfort'), description: bi('宽口浅盘和稳定底座，让清洗、摆放与日常观察更轻松。展示款式不代表医疗或喂养建议。', 'A wide shallow dish and stable base make cleaning and daily observation easier. The design is not medical or dietary advice.'), price: bi('演示参考 ¥88', 'Demo guide $12'), shape: 'bowl', facts: [bi('宽口浅盘', 'Wide shallow dish'), bi('便于清洁', 'Easy to clean'), bi('稳定底座', 'Stable base')] },
] as const
export const categories = [ { id: 'all', label: bi('全部', 'All') }, { id: 'rest', label: bi('安心休息', 'Rest') }, { id: 'play', label: bi('快乐玩耍', 'Play') }, { id: 'care', label: bi('日常照顾', 'Care') } ] as const
export const services = [
  { id: 'grooming', number: '01', title: bi('温柔洗护', 'Gentle grooming'), intro: bi('干净舒服 也要安心自在', 'Clean, comfortable and calm'), body: bi('从熟悉环境开始，先观察猫咪状态，再讨论梳毛、指甲与清洁方案。不强迫、不赶进度，猫咪感到不适时及时暂停。', 'Start with time to settle in. Observe your cat before discussing brushing, nail care and cleaning. Avoid force or rushing; pause when your cat is uncomfortable.'), steps: [bi('了解习惯与敏感点', 'Understand habits and sensitivities'), bi('安静环境下逐步适应', 'Settle gradually in a quiet space'), bi('按状态调整洗护节奏', 'Adapt the session to their comfort')], note: bi('本页为服务流程演示，不提供真实预约或医疗服务。', 'This is an illustrative service flow, with no real booking or medical service.') },
  { id: 'wellness', number: '02', title: bi('日常健康', 'Everyday wellness'), intro: bi('在细小变化里 读懂它', 'Notice the little things'), body: bi('记录饮食、饮水、活动和如厕习惯，帮助你向专业兽医描述变化。我们提供日常观察清单，不提供诊断、处方或急救服务。', 'Track eating, drinking, activity and litter habits to describe changes to a qualified veterinarian. Our observation checklist does not provide diagnosis, prescriptions or emergency care.'), steps: [bi('建立日常观察习惯', 'Build a daily observation habit'), bi('记录持续或异常变化', 'Record persistent or unusual changes'), bi('及时向合格兽医求助', 'Consult a qualified veterinarian promptly')], note: bi('如出现呼吸困难、无法排尿等紧急情况，请立即联系当地兽医急诊。', 'For urgent signs such as breathing difficulty or inability to urinate, contact a local emergency veterinarian immediately.') },
  { id: 'vet-programs', number: '03', title: bi('兽医关怀', 'Vet care planning'), intro: bi('为专业照护 做好准备', 'Be ready for professional care'), body: bi('把既往病史、近期观察与想问的问题整理好，让每一次就诊沟通更清楚。这里展示就诊准备方式，不声称拥有真实诊所、医生或执业服务。', 'Organize medical history, recent observations and questions for clearer conversations at appointments. This page illustrates preparation; it does not represent a real clinic, veterinarian or licensed service.'), steps: [bi('整理既往病史与用药', 'Prepare medical and medication history'), bi('记录问题与观察时间', 'Note questions and observation dates'), bi('与合格兽医讨论后续计划', 'Discuss next steps with a qualified vet')], note: bi('健康信息仅供一般教育参考，不能代替专业诊断。', 'Health information is for general education and does not replace professional diagnosis.') },
] as const
export const articles = [
  { id: 'a-window-of-their-own', category: bi('居家陪伴', 'At home'), title: bi('给猫咪一扇自己的窗', 'A window of their own'), excerpt: bi('把一小块阳光，变成每天都期待的角落。', 'Turn a little patch of sunlight into a daily delight.'), reading: bi('约 3 分钟', '3 min read'), shape: 'perch', paragraphs: [bi('猫咪喜欢观察。窗外树叶的轻轻晃动、飞过的小鸟，都能为室内生活带来新的变化。一个安静、稳固的观察位置，比复杂的布置更有价值。', 'Cats like to watch. Swaying leaves and passing birds bring variety to indoor life. A quiet, stable viewing spot can be more valuable than elaborate decoration.'), bi('先检查窗户与纱窗是否牢固，避免敞开的窗或不可靠的支撑。把软垫放在猫咪自己选择的位置，给它靠近和离开的自由。', 'Check that windows and screens are secure. Avoid open windows and unreliable supports. Place a cushion where your cat chooses and let them come and go.'), bi('观察它在不同时间的喜好，避免过热或直晒太久。舒服的家，是可以睡觉、躲藏，也能随时退回安静角落的家。', 'Notice preferences at different times and avoid overheating or prolonged direct sun. A comfortable home offers places to sleep, hide and retreat into quiet.') ] },
  { id: 'ten-minutes-of-play', category: bi('玩耍日常', 'Playtime'), title: bi('每天十分钟 认真陪它玩', 'Ten minutes, just for them'), excerpt: bi('追逐、停顿和奖励，让简单的陪伴更有趣。', 'Chase, pause and reward: a simpler way to play.'), reading: bi('约 4 分钟', '4 min read'), shape: 'play', paragraphs: [bi('把手机放下，观察猫咪今天的精力。有的猫咪喜欢追逐，有的更享受躲藏与等待，不必强求一样的玩法或时间。', 'Put your phone down and observe their energy today. Some cats like chasing; others prefer hiding and waiting. There is no single required game or duration.'), bi('让玩具像小猎物一样移动，穿插停顿，给猫咪真正抓到它的机会。避免用手脚当玩具，也不让绳线在无人看护时留在地面。', 'Move toys like small prey, pause often and let your cat catch them. Avoid using hands and feet as toys, and never leave strings accessible unsupervised.'), bi('在它仍然轻松愉快时结束。把玩具收好，留出安静喝水和休息的时间。持续观察，比完成一个固定运动目标更重要。', 'Finish while they are still comfortable. Store toys and allow quiet time for water and rest. Ongoing observation matters more than meeting a fixed exercise target.') ] },
] as const
export const faqs = [
  { q: bi('这里可以购买或预约吗？', 'Can I buy products or book a visit?'), a: bi('这是一个演示网站。好物价格与服务流程用于展示，暂不收款、不下单，也不会发送真实预约。', 'This is a demo. Product prices and service flows are illustrative. No payment, order or real booking is submitted.') },
  { q: bi('所有猫咪都适合洗澡吗？', 'Does every cat need a bath?'), a: bi('洗护方式取决于个体情况。不应强迫猫咪接受不必要的洗澡；皮肤或健康问题请咨询合格兽医。', 'Care depends on the individual cat. Do not force unnecessary bathing. Consult a qualified vet about skin or health concerns.') },
  { q: bi('联系表单会保存信息吗？', 'Does the contact form save my information?'), a: bi('不会。表单只在当前浏览器校验，刷新后清空；不发送邮件，也不写入服务器或本地存储。', 'No. The form validates only in the current browser and clears on refresh. It sends no email and writes no server or local storage data.') },
] as const
