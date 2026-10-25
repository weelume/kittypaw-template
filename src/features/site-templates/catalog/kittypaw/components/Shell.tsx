'use client'
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { brand, type Locale } from '../config/brand'
import { copy, navigation } from '../content/data'
import { useKittypawHost } from '../host'
import { href, localeHref } from '../routing'
import '../theme.css'
const subscribeMobile = (callback: () => void) => { const query = window.matchMedia('(max-width:767px)'); query.addEventListener('change', callback); return () => query.removeEventListener('change', callback) }
const isMobile = () => window.matchMedia('(max-width:767px)').matches

function Brand({ light = false }: { light?: boolean }) {
  const host = useKittypawHost()
  const locale: Locale = usePathname().split('/').includes('en') ? 'en' : 'zh'
  const logo = light ? host.lightLogo || host.logo || brand.logo : host.logo || brand.logo
  return <span className={'kp-brand' + (light ? ' kp-brand-light' : '')}><img src={logo} alt="" />{host.logo && <span>{host.brandName[locale]}</span>}<span className="kp-sr">{host.brandName[locale]}</span></span>
}
export function Header({ locale, basePath, hero = false }: { locale: Locale; basePath: string; hero?: boolean }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const mobile = useSyncExternalStore(subscribeMobile, isMobile, () => false)
  const trigger = useRef<HTMLButtonElement>(null), panel = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (!open) return
    const element = panel.current
    const previousOverflow = document.body.style.overflow
    if (window.innerWidth < 768) document.body.style.overflow = 'hidden'
    element?.querySelector<HTMLElement>('button,a')?.focus()
    function onKey(event: KeyboardEvent): void {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
      if (event.key === 'Tab' && window.innerWidth < 768 && element) {
        const items = Array.from(element.querySelectorAll<HTMLElement>('button,a')).filter(item => item.offsetParent !== null)
        const first = items[0], last = items.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    function outside(event: PointerEvent): void {
      if (!element?.contains(event.target as Node) && !trigger.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey); document.addEventListener('pointerdown', outside)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', outside) }
  }, [open])
  return <motion.header className={'kp-header' + (hero ? ' kp-header-hero' : '')} initial={hero && !reduced ? { opacity: 0, y: -40 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [.16, 1, .3, 1] }}>
    <Link href={href(basePath)} aria-label={locale === 'zh' ? '返回首页' : 'Home'}><Brand light={hero} /></Link>
    <div className="kp-header-actions"><LanguageLink locale={locale} basePath={basePath} />
      <button ref={trigger} className="kp-menu-button" aria-expanded={open} aria-controls="kp-menu" onClick={() => setOpen(value => !value)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>{copy.menu[locale]}</button>
    </div>
    <AnimatePresence>{open && <motion.div ref={panel} id="kp-menu" className="kp-menu-panel" role={mobile ? 'dialog' : undefined} aria-modal={mobile || undefined} aria-label={copy.menu[locale]} initial={reduced ? false : mobile ? { x: '100%' } : { opacity: 0, scale: .92, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0, x: 0 }} exit={reduced ? {} : mobile ? { x: '100%' } : { opacity: 0, scale: .92, y: 10 }} transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: mobile ? 300 : 380, damping: mobile ? 30 : 26 }}>
      <div className="kp-drawer-top"><Brand light /><button aria-label={copy.close[locale]} onClick={() => { setOpen(false); trigger.current?.focus() }}>×</button></div>
      <nav aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{navigation.map((item, index) => <motion.div key={item.slug} initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .1 }}><Link href={href(basePath, item.slug)} aria-current={pathname === href(basePath, item.slug) ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label[locale]}</Link></motion.div>)}</nav>
      <small>© {brand.copyrightYear} {brand.name[locale]}</small>
    </motion.div>}</AnimatePresence>
  </motion.header>
}
function LanguageLink({ locale, basePath }: { locale: Locale; basePath: string }) {
  const pathname = usePathname(), search = useSearchParams(), router = useRouter()
  // onClick 中通过 router.push 读取当前锚点，避免整页刷新并保持当前查询参数。
  const target = localeHref(pathname, basePath, locale, search.size ? '?' + search.toString() : '')
  return <Link className="kp-language" href={target} lang={locale === 'zh' ? 'en' : 'zh-CN'} onClick={event => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); router.push(target + window.location.hash) }}>{locale === 'zh' ? 'EN' : '中文'}</Link>
}
export function Footer({ locale, basePath }: { locale: Locale; basePath: string }) {
  const host = useKittypawHost()
  return <footer className="kp-footer"><div className="kp-footer-top"><div><Brand light /><h2>{brand.tagline[locale]}</h2><p>{copy.demo[locale]}</p></div><nav aria-label={locale === 'zh' ? '页脚导航' : 'Footer navigation'}>{navigation.slice(1).map(item => <Link key={item.slug} href={href(basePath, item.slug)}>{item.label[locale]}</Link>)}</nav></div><div className="kp-footer-bottom"><span>© {brand.copyrightYear} {host.brandName[locale]}</span><Link href={href(basePath, 'privacy')}>{locale === 'zh' ? '隐私政策' : 'Privacy'}</Link><Link href={href(basePath, 'terms')}>{locale === 'zh' ? '使用条款' : 'Terms'}</Link>{host.filing}</div></footer>
}
export function Shell({ locale, basePath, children, hero = false }: { locale: Locale; basePath: string; children: ReactNode; hero?: boolean }) {
  const host = useKittypawHost()
  return <div className="kp-root" lang={locale === 'zh' ? 'zh-CN' : 'en'}><a className="kp-skip" href="#kp-main">{locale === 'zh' ? '跳到正文' : 'Skip to content'}</a>{!hero && <Header locale={locale} basePath={basePath} />}<main id="kp-main">{children}</main><Footer locale={locale} basePath={basePath} />{host.marketplaceHref && <Link className="kp-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt="" />}<span>{host.brandName[locale]}</span></Link>}</div>
}
