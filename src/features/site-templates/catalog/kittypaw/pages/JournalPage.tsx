import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { JournalCards } from '../components/Cards'
import { PageIntro } from '../components/PageParts'
export default function JournalPage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  const zh = locale === 'zh'
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={zh ? '养猫手记' : 'THE CAT JOURNAL'} title={zh ? '喜欢猫咪 也喜欢有它的生活' : 'For cats. And the people who love them.'}>{zh ? '关于陪伴、玩耍与日常照顾的小小记录。原创教育内容，不代替兽医意见。' : 'Original notes on companionship, play and daily care. Educational content, not a replacement for veterinary advice.'}</PageIntro><section className="kp-section kp-container"><JournalCards locale={locale} basePath={basePath} /></section></Shell>
}
