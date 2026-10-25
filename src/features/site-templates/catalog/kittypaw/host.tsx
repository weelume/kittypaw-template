'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { brand, type Bilingual } from './config/brand'
export interface KittypawHostConfig {
  brandName: Bilingual
  logo?: string
  lightLogo?: string
  marketplaceHref?: string
  marketplaceLabel?: Bilingual
  marketplaceAriaLabel?: Bilingual
  filing?: ReactNode
}
const Context = createContext<KittypawHostConfig>({ brandName: brand.name })
export function KittypawHostProvider({ children, ...config }: KittypawHostConfig & { children: ReactNode }) {
  return <Context.Provider value={config}>{children}</Context.Provider>
}
export const useKittypawHost = () => useContext(Context)
