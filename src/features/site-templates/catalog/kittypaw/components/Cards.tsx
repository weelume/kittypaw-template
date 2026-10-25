'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { categories, copy, products, services, articles, faqs } from '../content/data'
import type { Locale } from '../config/brand'
import { href } from '../routing'
import { Reveal } from './Motion'

/** 原创 SVG 展示示意图与真实产品照片明确区分，避免借用无来源商品图片。 */
export function ProductArt({ shape, label }: { shape: string; label: string }) {
  return <div className={'kp-art kp-art-' + shape}><svg viewBox="0 0 420 300" role="img" aria-label={label}><ellipse cx="210" cy="252" rx="125" ry="16" fill="#092a2815" />{shape === 'perch' ? <g><path d="M90 130v108m240-108v108M105 80v75m210-75v75" stroke="#69633e" strokeWidth="13" strokeLinecap="round" /><path d="M74 142Q210 185 346 142L325 208Q210 251 95 208Z" fill="#c6ad7d" /><path d="M76 141Q210 102 344 141Q210 192 76 141" fill="#f9eed6" /><path d="M110 141Q210 118 310 141" fill="none" stroke="#e7d2ad" strokeWidth="3" /><path d="M160 141q-20-28-14-52l23 15q35-12 59 2l24-13q5 35-18 49" fill="#9eab9a" /><path d="M174 118l6 3m24-1l6-2" stroke="#3c5245" strokeWidth="3" strokeLinecap="round" /></g> : shape === 'play' ? <g><path d="M110 230L215 70" stroke="#7c6d4c" strokeWidth="10" strokeLinecap="round" /><path d="M215 70q105 24 63 99" stroke="#5e7670" strokeWidth="3" fill="none" /><path d="M278 167q-30-12-35 12q-10 29 25 39q38-27 10-51" fill="#bd7a5a" /><circle cx="145" cy="213" r="32" fill="#f4d998" /><path d="M117 199q32 20 55 3m-44 38q12-28 8-57" fill="none" stroke="#c9ac69" strokeWidth="3" /><ellipse cx="290" cy="229" rx="29" ry="18" fill="#bacabe" /></g> : <g><path d="M100 157l26 67q83 42 168 0l26-67" fill="#a3b6aa" /><ellipse cx="210" cy="157" rx="110" ry="34" fill="#eaf0e5" /><ellipse cx="210" cy="157" rx="83" ry="22" fill="#cbd9cd" /><path d="M159 235h101" stroke="#57796a" strokeWidth="8" strokeLinecap="round" /><path d="M184 150q7-9 17 0m13 7q6-9 14 0m-29 9q7-9 16 0" stroke="#a18057" strokeWidth="8" strokeLinecap="round" /></g>}</svg><span>{label}</span></div>
}
export function ProductGrid({ locale, basePath, filterable = false }: { locale: Locale; basePath: string; filterable?: boolean }) {
  const [filter, setFilter] = useState('all')
  const visible = products.filter(product => filter === 'all' || product.category === filter)
  return <>{filterable && <div className="kp-filters" role="group" aria-label={copy.category[locale]}>{categories.map(category => <button key={category.id} aria-pressed={category.id === filter} onClick={() => { setFilter(category.id); console.debug('[kittypaw:products] category selected', { category: category.id }) }}>{category.label[locale]}</button>)}</div>}<div className="kp-grid kp-products-grid">{visible.map((product, i) => <Reveal key={product.id} delay={i * .08}><article className="kp-card"><Link href={href(basePath, 'products/' + product.id)}><ProductArt shape={product.shape} label={locale === 'zh' ? '原创好物示意图' : 'Original product illustration'} /><div className="kp-card-body"><span className="kp-eyebrow">{product.price[locale]}</span><h3>{product.name[locale]}</h3><p>{product.description[locale]}</p><span className="kp-text-link">{copy.discover[locale]}</span></div></Link></article></Reveal>)}</div>{visible.length === 0 && <p>{copy.noProducts[locale]}</p>}</>
}
export function ServiceCards({ locale, basePath }: { locale: Locale; basePath: string }) {
  return <div className="kp-grid">{services.map((service, i) => <Reveal key={service.id} delay={i * .1}><Link className="kp-service kp-card" href={href(basePath, service.id)}><span className="kp-service-number">{service.number}</span><h3>{service.title[locale]}</h3><p>{service.intro[locale]}</p><span className="kp-text-link">{copy.discover[locale]}</span></Link></Reveal>)}</div>
}
export function JournalCards({ locale, basePath }: { locale: Locale; basePath: string }) {
  return <div className="kp-grid kp-journal-grid">{articles.map((article, i) => <Reveal key={article.id} delay={i * .1}><Link className="kp-card kp-journal-card" href={href(basePath, 'journal/' + article.id)}><ProductArt shape={article.shape} label={article.category[locale]} /><div className="kp-card-body"><span className="kp-eyebrow">{article.category[locale]} · {article.reading[locale]}</span><h3>{article.title[locale]}</h3><p>{article.excerpt[locale]}</p><span className="kp-text-link">{copy.read[locale]}</span></div></Link></Reveal>)}</div>
}
export function FAQ({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number | null>(null)
  const reduced = useReducedMotion()
  return <FAQContent locale={locale} open={open} onToggle={index => setOpen(open === index ? null : index)} reduced={Boolean(reduced)} />
}
function FAQContent({ locale, open, onToggle, reduced }: { locale: Locale; open: number | null; onToggle: (index: number) => void; reduced: boolean }) {
  return <div className="kp-faq">{faqs.map((faq, i) => <div className="kp-faq-row" key={faq.q.en}><h3><button aria-expanded={open === i} aria-controls={'kp-answer-' + i} onClick={() => onToggle(i)}>{faq.q[locale]}<span aria-hidden="true">{open === i ? '−' : '+'}</span></button></h3><motion.div id={'kp-answer-' + i} initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: reduced ? 0 : .3 }} inert={open !== i}><p>{faq.a[locale]}</p></motion.div></div>)}</div>
}
