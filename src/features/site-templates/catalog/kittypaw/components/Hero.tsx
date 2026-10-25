'use client'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { copy } from '../content/data'
import { media, type Locale } from '../config/brand'
import { Header } from './Shell'
import { Scene } from './Scene'
import { PlayfulLink } from './Motion'
import { href } from '../routing'
export function Hero({ locale, basePath }: { locale: Locale; basePath: string }) {
  const reduced = useReducedMotion()
  const word: Variants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } } }
  return <section className="kp-hero" aria-label={locale === 'zh' ? '猫咪的每一份喜欢 都被珍爱' : 'Everything your cats love'}>
    <Scene locale={locale} /><Header locale={locale} basePath={basePath} hero />
    <div className="kp-hero-main"><motion.h1 initial={reduced ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: .18, delayChildren: .8 } } }}>{copy.heroLines[locale].map((line, index) => <span className="kp-title-line" key={index}>{line.map(text => <motion.span key={text} variants={word}>{text}</motion.span>)}</span>)}</motion.h1><motion.p initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}>{copy.intro[locale]}</motion.p></div>
    <motion.div className="kp-hero-bottom" initial={reduced ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1.2, ease: [.16, 1, .3, 1] }}><PlayfulLink to={href(basePath, 'products')}>{copy.explore[locale]}</PlayfulLink><div className="kp-trusted"><div className="kp-avatars">{[1, 2, 3].map(i => <img key={i} src={media('avatar-' + i + '.png')} alt="" />)}</div><div><strong>{copy.metric}</strong><p>{copy.trusted[locale]}</p><small>{copy.metricNote[locale]}</small></div></div></motion.div>
  </section>
}
