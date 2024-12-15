import { ChangeEvent, useState } from 'react'
import styles from './InputBox.module.css'

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
  inputFor: string
  trim?: boolean
}

export function InputBox({ title, inputFor, trim, ...props }: InputBoxProps) {
  const [inputValue, setInputValue] = useState<string | number>()

  function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    if (trim) {
      setInputValue(e.currentTarget.value.trim())
    } else {
      setInputValue(e.currentTarget.value)
    }
  }

  return (
    <div className={styles.inputBox}>
      <label htmlFor={inputFor}>
        <strong>{title.toLocaleUpperCase()}:</strong>
      </label>
      <input
        type="text"
        id={inputFor}
        name={inputFor}
        value={inputValue}
        onChange={handleChangeInputValue}
        autoComplete='off'
        {...props}
      />
    </div>
  )
}