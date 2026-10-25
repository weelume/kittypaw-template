import type { ReactNode } from 'react'
import './globals.css'
export const metadata = { title: 'Kittypaw', description: '陪伴猫咪每一天 · Everything your cats love', robots: { index: false, follow: false } }
export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="zh-CN"><body>{children}</body></html>
}
