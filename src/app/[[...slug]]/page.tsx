import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { kittypawTemplate } from '../../features/site-templates/catalog/kittypaw/meta'
export function generateStaticParams() {
  return kittypawTemplate.surfaces[0].pages.flatMap(page => [{ slug: page.slug ? page.slug.split('/') : [] }, { slug: ['en', ...(page.slug ? page.slug.split('/') : [])] }])
}
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const locale = slug[0] === 'en' ? 'en' : 'zh'
  const path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const page = kittypawTemplate.surfaces[0].pages.find(page => page.slug === path)
  if (!page) notFound()
  const { default: Component } = await page.load()
  return <Suspense><Component locale={locale} basePath={locale === 'en' ? '/en' : ''} /></Suspense>
}
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const locale = slug[0] === 'en' ? 'en' : 'zh'
  const path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const page = kittypawTemplate.surfaces[0].pages.find(page => page.slug === path)
  return { title: (locale === 'en' ? page?.localizedTitles?.en : page?.title) + ' · Kittypaw' }
}
