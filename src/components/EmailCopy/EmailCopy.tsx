import { MouseEvent, useState } from 'react'
import style from './EmailCopy.module.css'
import { toast } from 'react-toastify'

interface TextCopyProps {
  text: string
}

export function EmailCopy({ text }: TextCopyProps) {
  const [clipboard, setClipboard] = useState('')

  navigator.clipboard.writeText(clipboard)

  function handleCopy(e: MouseEvent<HTMLTextAreaElement>) {
    setClipboard(e.currentTarget.value)
    toast.success('Email copiado com sucesso.')
  }

  return (
    <div className={style.container}>
      <textarea
        className={style.textarea}
        readOnly
        value={text}
        onClick={handleCopy}
      />
    </div>
  )
}