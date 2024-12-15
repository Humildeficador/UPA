import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import { InputBox } from './components/InputBox/InputBox'
import { InputBoxEndereco } from './components/InputBoxEndereco/InputBoxEndereco'
import { FormValues } from './types/FormData'
import { formatedEmail } from './utils/email'
import { EmailCopy } from './components/EmailCopy/EmailCopy'

import { Destinatario } from './components/Destinatario/Destinatario'

export function App() {
  const [email, setEmail] = useState('')
  const [emailDestinatario, setEmailDestinatario] = useState('')
  const [complemento, setComplemento] = useState(false)

  function handleGetFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as FormValues;
    setEmail(formatedEmail({ formValues: data, emailDestinatario }));
  }

  function handleChangeComplementoValue() {
    setComplemento(prev => !prev)
  }

  function changeDestinatario(e: ChangeEvent<HTMLInputElement>) {
    setEmailDestinatario(e.currentTarget.value)
  }

  return (
    <>
      <header>
        <h1>Gerador de Email</h1>
      </header>
      <div className={styles.container}>
        <form onSubmit={handleGetFormData}>
          <section>
            <h2>Dados do profissional</h2>
            <div>
              <InputBox
                title='NOME COMPLETO'
                inputFor='nome'
                name='nome'
                key='nome'
              />
              <InputBox
                title='NOME DA MAE'
                inputFor='mae'
                name='mae'
                key='mae'
              />
              <InputBox
                title='NOME DO PAI'
                inputFor='pai'
                name='pai'
                key='pai'
              />
              <InputBox
                title='DATA DE NASCIMENTO'
                inputFor='nasc'
                name='nasc'
                key='nasc'
              />
              <InputBox
                title='RG'
                inputFor='rg'
                name='rg'
                key='rg'
              />
              <InputBox
                title='CPF'
                inputFor='cpf'
                name='cpf'
                key='cpf'
              />
              <InputBox
                title='CRM'
                inputFor='crm'
                name='crm'
                key='crm'
              />
              <InputBox
                title='CELULAR'
                inputFor='cel'
                name='cel'
                key='cel'
              />
              <InputBox
                title='CNS'
                inputFor='cns'
                name='cns'
                key='cns'
              />
              <InputBox
                title='EMAIL'
                inputFor='email'
                name='email'
                key='email'
              />
            </div>
          </section>
          <section>
            <h2>Dados de endereço</h2>
            <InputBoxEndereco />
            <div >
              <div className={styles.complementoCheckbox}>
                <div>
                  <input
                    type="checkbox"
                    checked={complemento}
                    onChange={handleChangeComplementoValue}
                    id='complementoCheck'
                  />
                  <label htmlFor='complementoCheck'>Tem complemento?</label>
                </div>
                {
                  complemento &&
                  <InputBox
                    title='COMPLEMENTO'
                    inputFor='complemento'
                    name='complemento'
                    key='complemento'
                  />
                }
              </div>
            </div>
          </section>
          <div className={styles.remetente}>
            <InputBox
              title='Remetente'
              inputFor='remetente'
              name='remetente'
              key='remetente'
            />
          </div>
          <button type="submit">Gerar Email</button>
        </form>
        <div className={styles.email}>
          <nav>
            <div>
              <span>
                <input
                  type='radio'
                  name='destinatario'
                  id='hygia'
                  value={'ao Hygia'}
                  onChange={changeDestinatario}
                />
                <label htmlFor='hygia'>Hygia</label>
              </span>
              <span>
                <input
                  type='radio'
                  name='destinatario'
                  id='sisath'
                  value={'ao SISATH'}
                  onChange={changeDestinatario}
                />
                <label htmlFor='sisath'>SISATH</label>
              </span>
              <span>
                <input
                  type='radio'
                  name='destinatario'
                  id='rede'
                  value={'à Rede'}
                  onChange={changeDestinatario}
                />
                <label htmlFor='rede'>Acesso a rede</label>
              </span>
              <span>
                <input
                  type='radio'
                  name='destinatario'
                  id='sisath/rede'
                  value={'ao SISATH/Rede'}
                  onChange={changeDestinatario}
                />
                <label htmlFor='sisath/rede'>SISATH/Rede</label>
              </span>
            </div>

            <Destinatario destinatario={emailDestinatario} />

          </nav>
          {email && <EmailCopy text={email} />}
        </div>
      </div>
      <footer>&copy; <a href="https://github.com/Humildeficador" target='_blank'>João Leandro</a>, UPA Silvina/Ferrazopolis</footer>
    </>
  )
}