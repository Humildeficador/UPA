import { toast } from 'react-toastify';
import { FormValues } from "../types/FormData";
const date = new Date()
const hours = date.getHours()
const fullDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
const greeting = hours <= 12 ? 'Bom dia' : hours <= 18 ? 'Boa tarde' : 'Boa noite'

const capitalize = (str: string) => str.charAt(0).toLocaleUpperCase() + str.slice(1)

interface FormatedEmailProps {
  formValues: FormValues,
  emailDestinatario: string
}


export function formatedEmail({ formValues, emailDestinatario }: FormatedEmailProps) {
  if (formValues.nome === '') {
    toast.error('Dados incompletos')
    return ''
  }
  if (formValues.remetente === '') {
    toast.info('Preencha o remetente')
    return ''
  }
  if (emailDestinatario === '') {
    toast.info('Preencha um dos acessos necessario.')
    return ''
  }


  const email = `${greeting}, solicito acesso ${emailDestinatario} para médico fora do horário comercial
  Dados do profissional
  Nome: ${formValues.nome}
  Nome da mãe: ${formValues.mae}
  ${formValues.pai ? `Nome do pai: ${formValues.pai}` : ''}
  Data de nascimento: ${formValues.nasc}
  RG/RNE: ${formValues.rg}
  CPF: ${formValues.cpf}
  CRM: ${formValues.crm}
  Celular: ${formValues.cel}
  ${formValues.cns ? `CSN: ${formValues.cns}` : ''} 
  Email: ${formValues.email}
  Dados do endereço
  CEP: ${formValues.cep}
  Logradouro: ${formValues.rua}
  Estado: ${formValues.uf}
  Cidade: ${formValues.cidade}
  Bairro: ${formValues.bairro}
  Número: ${formValues.numero}
  ${formValues.complemento ? `Complemento: ${formValues.complemento}` : ''}
  No aguardo
  Recepção, ${capitalize(formValues.remetente)}, ${fullDate}.`

  return email.replace(/\n\s*/g, '\n').trim();
}