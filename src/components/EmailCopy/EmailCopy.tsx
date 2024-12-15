import { MouseEvent } from 'react'
import style from './EmailCopy.module.css'
import { toast } from 'react-toastify'

interface TextCopyProps {
  text: string
}

export function EmailCopy({ text }: TextCopyProps) {  
  function handleCopy(e: MouseEvent<HTMLTextAreaElement>) {
    navigator.clipboard.writeText(e.currentTarget.value)
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