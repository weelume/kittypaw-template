'use client'
import { useState, type FormEvent } from 'react'
import type { Locale } from '../config/brand'
export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<'idle' | 'invalid' | 'validated'>('idle')
  const zh = locale === 'zh'
  function submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const valid = form.checkValidity() && ['name', 'message'].every(key => String(data.get(key) || '').trim().length > 0) && data.get('consent') === 'on'
    setStatus(valid ? 'validated' : 'invalid')
    console.debug('[kittypaw:contact] local validation', { valid, sent: false, persisted: false })
    if (!valid) form.reportValidity()
  }
  return <form className="kp-form kp-card" onSubmit={submit} noValidate onChange={() => { if (status !== 'idle') setStatus('idle') }}>
    <h2>{zh ? '和我们聊聊' : 'Tell us a little more'}</h2><p>{zh ? '仅本地校验，信息不会发送或保存。请勿填写敏感资料。' : 'Local validation only. Nothing is sent or saved. Please omit sensitive information.'}</p>
    <label htmlFor="kp-name">{zh ? '称呼' : 'Name'}<input id="kp-name" name="name" autoComplete="off" required maxLength={80} /></label>
    <label htmlFor="kp-email">{zh ? '邮箱' : 'Email'}<input id="kp-email" name="email" type="email" autoComplete="off" required maxLength={160} /></label>
    <label htmlFor="kp-topic">{zh ? '感兴趣的内容' : 'I’m interested in'}<select id="kp-topic" name="topic"><option value="products">{zh ? '猫咪好物' : 'Cat essentials'}</option><option value="grooming">{zh ? '洗护与日常照顾' : 'Grooming and everyday care'}</option><option value="other">{zh ? '其他问题' : 'Something else'}</option></select></label>
    <label htmlFor="kp-message">{zh ? '留言' : 'Message'}<textarea id="kp-message" name="message" required minLength={5} maxLength={2000} rows={5} /></label>
    <label className="kp-consent"><input name="consent" type="checkbox" required />{zh ? '我了解这是演示表单，不会发送信息或产生预约。' : 'I understand this demo form does not send a message or create a booking.'}</label>
    <button className="kp-button kp-button-dark" type="submit">{zh ? '检查填写内容' : 'Validate my message'}</button>
    <p role="status" aria-live="polite" className="kp-form-status">{status === 'validated' ? zh ? '校验通过。信息尚未发送、未保存，也未产生预约。' : 'Validation passed. Nothing was sent or saved. No booking was created.' : status === 'invalid' ? zh ? '请完整填写称呼、有效邮箱、至少五字的留言，并勾选演示说明。' : 'Please enter your name, a valid email, a message of at least five characters and accept the demo notice.' : ''}</p>
  </form>
}
