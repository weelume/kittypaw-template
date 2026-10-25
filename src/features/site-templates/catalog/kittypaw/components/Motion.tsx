'use client'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>
}
export function PlayfulLink({ to, children, dark = false }: { to: string; children: string; dark?: boolean }) {
  const reduced = useReducedMotion()
  const letters: Variants = {
    rest: { y: 0, x: 0, scale: 1 },
    hover: (i: number) => reduced ? {} : { y: [0, -8, 4, 0], x: [0, 4, -2, 0], scale: [1, 1.15, .95, 1], transition: { duration: .6, ease: 'easeInOut', delay: .03 * i } },
  }
  return <motion.span initial="rest" whileHover="hover" className="kp-playful"><Link className={'kp-button' + (dark ? ' kp-button-dark' : '')} href={to}><span className="kp-sr">{children}</span><span aria-hidden="true">{Array.from(children).map((letter, i) => <motion.span key={i} variants={letters} custom={i} className="kp-letter">{letter === ' ' ? '\u00a0' : letter}</motion.span>)}</span></Link></motion.span>
}
