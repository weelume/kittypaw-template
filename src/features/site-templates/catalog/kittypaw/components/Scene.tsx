'use client'
import { useEffect, useRef, useState, useId } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { copy } from '../content/data'
import { media, type Locale } from '../config/brand'

/** 视频保留原参考的双阶段机制：前五秒预览循环，点击后播放完整十秒循环。 */
export function Scene({ locale }: { locale: Locale }) {
  const video = useRef<HTMLVideoElement>(null)
  const [continued, setContinued] = useState(false)
  const [paused, setPaused] = useState(true)
  const [blocked, setBlocked] = useState(false)
  const [failed, setFailed] = useState(false)
  const [cursor, setCursor] = useState(false)
  const reduced = useReducedMotion()
  const x = useMotionValue(-120), y = useMotionValue(-120)
  const sx = useSpring(x, { damping: 28, stiffness: 280, mass: .4 })
  const sy = useSpring(y, { damping: 28, stiffness: 280, mass: .4 })
  const id = useId().replace(/:/g, '')

  useEffect(() => {
    const element = video.current
    if (!element) return
    if (reduced) { element.pause(); return }
    void element.play().catch((error: unknown) => {
      console.debug('[kittypaw:scene] autoplay requires interaction', error instanceof Error ? error.name : 'unknown')
      setBlocked(true)
    })
  }, [reduced])

  async function play(): Promise<void> {
    const element = video.current
    if (!element) return
    try {
      await element.play()
      setPaused(false); setBlocked(false)
      console.debug('[kittypaw:scene] playing', { continued, time: Math.round(element.currentTime * 100) / 100 })
    } catch (error: unknown) {
      console.error('[kittypaw:scene] playback failed', error instanceof Error ? error.name : 'unknown')
      setBlocked(true)
    }
  }
  function continueWalk(): void {
    setContinued(true)
    console.debug('[kittypaw:scene] full walk enabled')
    void play()
  }
  return <>
    <video ref={video} className="kp-video" src={media('scene.mp4')} poster={media('poster.jpg')} muted playsInline loop={continued} preload="auto" aria-label={locale === 'zh' ? '从玻璃下仰望猫咪、花叶与天空的动态场景' : 'A cat, flowers and sky viewed from below a glass roof'} onPause={() => setPaused(true)} onPlaying={() => { setPaused(false); setBlocked(false) }} onError={() => { setFailed(true); console.error('[kittypaw:scene] media load failed') }} onTimeUpdate={() => {
      const element = video.current
      if (element && !continued && element.currentTime >= 5) {
        element.currentTime = 0
        console.debug('[kittypaw:scene] preview loop restarted')
      }
    }} />
    <div className="kp-scene-shade" />
    <button className="kp-scene-target" aria-label={copy.continue[locale]} onClick={continueWalk} onPointerEnter={() => setCursor(true)} onPointerLeave={() => setCursor(false)} onPointerMove={event => { x.set(event.clientX); y.set(event.clientY) }} />
    <div className="kp-scene-controls">
      <button aria-pressed={!(paused || blocked)} onClick={() => {
        if (paused || blocked) void play()
        else { video.current?.pause(); console.debug('[kittypaw:scene] paused by user') }
      }}>{paused || blocked ? copy.play[locale] : copy.pause[locale]}</button>
      {continued && <button onClick={() => { setContinued(false); if (video.current) video.current.currentTime = 0; console.debug('[kittypaw:scene] reset'); void play() }}>{copy.reset[locale]}</button>}
    </div>
    {(blocked || failed) && <div className="kp-video-status" role="status">{failed ? copy.failed[locale] : copy.continue[locale]}<button onClick={() => { if (failed) { video.current?.load(); setFailed(false) } void play() }}>{failed ? copy.retry[locale] : copy.play[locale]}</button></div>}
    {!reduced && <motion.div aria-hidden="true" className="kp-cursor" style={{ x: sx, y: sy }} animate={{ opacity: cursor ? 1 : 0, scale: cursor ? 1 : .4 }} transition={{ duration: .15 }}><motion.svg viewBox="0 0 80 80" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}><defs><path id={id} d="M40,40 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0" /></defs><text><textPath href={'#' + id}>{copy.cursor[locale]}</textPath></text></motion.svg><i /></motion.div>}
  </>
}
