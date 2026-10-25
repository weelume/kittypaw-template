import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { ContactForm } from '../components/ContactForm'
import { PageIntro } from '../components/PageParts'
export default function ContactPage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  const zh = locale === 'zh'
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={zh ? '联系我们' : 'SAY HELLO'} title={zh ? '每一个小问题 都值得认真听' : 'Every little question deserves a little care'}>{zh ? '关于好物、陪伴和猫咪的日常，我们都愿意听听。本页展示联系流程，不提供真实消息发送。' : 'Essentials, companionship and everyday life with cats: we’re all ears. This page demonstrates a contact flow without sending messages.'}</PageIntro><section className="kp-section kp-container kp-split"><div className="kp-prose"><h2>{zh ? '先了解 再陪伴' : 'Listen first. Care thoughtfully.'}</h2><p>{zh ? '请选择感兴趣的内容，再告诉我们希望了解的问题。演示不会创建订单、预约、账户或邮件。' : 'Choose a topic and describe what you would like to know. This demo creates no order, appointment, account or email.'}</p><p className="kp-note">{zh ? '本网站不能处理紧急健康问题。如猫咪出现急症，请联系当地兽医急诊。' : 'This website cannot handle urgent health concerns. Contact a local emergency veterinarian when your cat needs urgent care.'}</p></div><ContactForm locale={locale} /></section></Shell>
}
