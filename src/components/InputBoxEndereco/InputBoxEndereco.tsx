import { InputBox } from '../InputBox/InputBox'
import { ChangeEvent, useEffect, useState } from 'react'
import cep, { CEP } from 'cep-promise';

export function InputBoxEndereco() {
  const [cepValue, setCepValue] = useState('')
  const [cepInfo, setCepInfo] = useState<CEP>({
    cep: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    service: ''
  })

  function handleChangeCepValue(e: ChangeEvent<HTMLInputElement>) {
    const rawValue = e.currentTarget.value.replace(/\D/g, '')
    const formattedValue = rawValue.replace(/^(\d{5})(\d{3})$/, '$1-$2')

    setCepValue(formattedValue)
  }

  function handleChangeCepInfo(e: ChangeEvent<HTMLInputElement>, key: string) {
    const updatedValue = e.currentTarget.value
    setCepInfo(prev => ({ ...prev, [key]: updatedValue }))
  }

  useEffect(() => {
    async function buscarCep() {
      if (cepValue.length === 9) {
        const info = await cep(cepValue)
        setCepInfo(info)
      }
    }
    buscarCep()
  }, [cepValue])

  return (
    <div>
      <div>
        <InputBox
          title='CEP'
          inputFor='cep'
          key={'cep'}
          value={cepValue}
          onChange={handleChangeCepValue}
          trim
        />
        <InputBox
          title='LOGRADOURO'
          inputFor='rua'
          value={cepInfo.street}
          onChange={(e) => { handleChangeCepInfo(e, 'street') }}
        />
        <InputBox
          title='ESTADO'
          inputFor='uf'
          value={cepInfo.state.toLocaleUpperCase()}
          onChange={(e) => { handleChangeCepInfo(e, 'state') }}
        />
        <InputBox
          title='CIDADE'
          inputFor='cidade'
          value={cepInfo.city}
          onChange={(e) => { handleChangeCepInfo(e, 'city') }}
        />
        <InputBox
          title='BAIRRO'
          inputFor='bairro'
          value={cepInfo.neighborhood}
          onChange={(e) => { handleChangeCepInfo(e, 'neighborhood') }}
        />
        <InputBox
          title='NÚMERO'
          inputFor='numero'
        />
      </div>
    </div>
  )
}