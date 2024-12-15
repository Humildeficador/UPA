import { MouseEvent } from 'react'
import styles from './EmailCopy.module.css'
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
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        readOnly
        value={text}
        onClick={handleCopy}
      />
    </div>
  )
}