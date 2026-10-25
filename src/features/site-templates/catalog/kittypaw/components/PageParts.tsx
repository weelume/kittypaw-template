'use client'
import type { ReactNode } from 'react'
import type { Locale } from '../config/brand'
import { copy } from '../content/data'
import { href } from '../routing'
import { Reveal, PlayfulLink } from './Motion'
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="kp-page-intro kp-container"><Reveal><span className="kp-eyebrow">{eyebrow}</span><h1>{title}</h1><div className="kp-lead">{children}</div></Reveal></section>
}
export function Section({ title, children, soft = false, id }: { title: string; children: ReactNode; soft?: boolean; id?: string }) {
  return <section id={id} className={'kp-section' + (soft ? ' kp-section-soft' : '')}><div className="kp-container"><Reveal><h2>{title}</h2></Reveal>{children}</div></section>
}
export function ContactCTA({ locale, basePath }: { locale: Locale; basePath: string }) {
  return <section className="kp-cta"><Reveal><span className="kp-eyebrow">{locale === 'zh' ? 'FOR THE LOVE OF CATS · 为猫咪而来' : 'FOR THE LOVE OF CATS'}</span><h2>{copy.contact[locale]}</h2><p>{locale === 'zh' ? '从了解它的喜好开始，让照顾变得更从容。' : 'Start with what they love. Make everyday care a little easier.'}</p><PlayfulLink to={href(basePath, 'contact')}>{locale === 'zh' ? '联系我们' : 'Get in touch'}</PlayfulLink></Reveal></section>
}
