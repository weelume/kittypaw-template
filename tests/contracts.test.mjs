import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
const root=resolve(import.meta.dirname,'..')
const read=path=>readFile(resolve(root,path),'utf8')
const catalog='src/features/site-templates/catalog/kittypaw/'
test('all registered pages have Chinese and English titles and actual modules',async()=>{
 const metadata=JSON.parse(await read('.tpl/template.json'))
 const pages=metadata.surfaces[0].pages
 assert.equal(pages.length,15)
 assert.equal(new Set(pages.map(page=>page.slug)).size,15)
 assert.deepEqual(metadata.surfaces[0].locales,['zh','en'])
 const source=await read(catalog+'meta.ts')
 for(const page of pages){ assert.ok(page.title && page.localizedTitles.en); assert.ok(source.includes('slug: '+JSON.stringify(page.slug))) }
 for(const match of source.matchAll(/import\('\.\/pages\/(.*?)'\)/g)) await access(resolve(root,catalog+'pages/'+match[1]+'.tsx'))
})
test('contact validates locally without network or persistence',async()=>{
 const source=await read(catalog+'components/ContactForm.tsx')
 assert.match(source,/preventDefault/)
 assert.match(source,/form\.checkValidity/)
 assert.doesNotMatch(source,/fetch\(|localStorage|sessionStorage|XMLHttpRequest|sendBeacon/)
})
test('video media and both font weights are delivered locally',async()=>{
 const source=await read(catalog+'components/Scene.tsx')
 assert.match(source,/currentTime >= 5/)
 assert.match(source,/loop=\{continued\}/)
 for(const path of ['scene.mp4','poster.jpg','fonts/misans/MiSans-Regular.css','fonts/misans/MiSans-Bold.css','fonts/poppins-latin-400.woff2','fonts/poppins-latin-600.woff2','fonts/poppins-latin-700.woff2'])await access(resolve(root,'public/templates/kittypaw',path))
})

test('catalog screenshots are delivered page captures, with video poster kept separate', async () => {
 const metadata=JSON.parse(await read('.tpl/template.json'))
 assert.equal(metadata.cover,'assets/desktop-home.webp')
 assert.equal(metadata.screenshots.length,12)
 assert.equal(new Set(metadata.screenshots.map(shot=>shot.device+'/'+shot.pageSlug)).size,12)
 for(const shot of metadata.screenshots){
  assert.ok(['desktop','tablet','mobile'].includes(shot.device))
  assert.ok(['','products','journal','contact'].includes(shot.pageSlug))
  const expected={desktop:[1440,1000],tablet:[834,1180],mobile:[390,844]}[shot.device]
  assert.deepEqual([shot.width,shot.height],expected)
  assert.match(shot.src,/^assets\/[a-z-]+\.webp$/)
  const bytes=await readFile(resolve(root,'.tpl',shot.src))
  assert.equal(bytes.subarray(0,4).toString(),'RIFF')
  assert.equal(bytes.subarray(8,12).toString(),'WEBP')
 }
 const source=await read(catalog+'meta.ts')
 assert.doesNotMatch(source,/cover:\s*['"][^'"]*poster/)
 assert.doesNotMatch(source,/src:\s*['"][^'"]*poster/)
})
