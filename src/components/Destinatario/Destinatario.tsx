import { MouseEvent } from "react"
import { toast } from "react-toastify"
import styles from './Destinatario.module.css'

interface DestinatarioProps {
  destinatario: string
}

export function Destinatario({ destinatario }: DestinatarioProps) {
  function handleCopy(e: MouseEvent<HTMLSpanElement>, assunto?: boolean) {
    const preClipboard = e.currentTarget.innerText
    navigator.clipboard.writeText(preClipboard)
    if (assunto) {
      toast.success('Assunto copiado com sucesso.')
      return
    }
    toast.success('Destinatario copiado com sucesso.')
    return
  }

  const assunto = `Solicitação de acesso ${destinatario}`
  if (destinatario === '') {
    return (
      <></>
    )
  } else if (destinatario === 'ao Hygia') {
    return (
      <div className={styles.destinatario}>
        <div className={styles.assunto}>
          <strong>Assunto: </strong>
          <span onClick={(e) => { handleCopy(e, true) }}>Solicitação acesso {assunto}</span>
        </div>
        <div className={styles.title}>
          <span onClick={handleCopy}>suporte.ti@cssbc.org.br</span>
        </div>
        <div>
        </div>
        <ul>
          <li>
            Criação e redefinição de senha <strong>Hygia</strong>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className={styles.destinatario}>
        <div className={styles.assunto}>
          <strong>Assunto: </strong>
          <span onClick={(e) => { handleCopy(e, true) }}>Solicitação acesso {assunto}</span>
        </div>
        <div className={styles.title}>
          <span onClick={handleCopy}>tic.saude@saobernardo.sp.gov.br</span>
        </div>
        <h3>Demais Solicitações</h3>
        <ul>
          <li>
            Cadastro de <strong>REDE</strong>
          </li>
          <li>
            CADASTRO de <strong>SISATH</strong>
          </li>
        </ul>
      </div>
    )
  }
}