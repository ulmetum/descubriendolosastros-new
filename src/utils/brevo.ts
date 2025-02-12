import { API_KEY_BREVO } from '@/config'
import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  API_KEY_BREVO as string
)

interface Props {
  to: { email: string; name: string }[]
  templateId: number
  subject?: string
  params: Record<string, any>
}

export const sendEmail = async ({ to, templateId, params, subject }: Props) => {
  // export const sendEmail = async ({ to, subject, htmlContent }: Props) => {
  try {
    const smtpEmail = new brevo.SendSmtpEmail()

    // smtpEmail.htmlContent = `<html><body><div>${htmlContent}</div></body></html>`
    smtpEmail.subject = subject
    smtpEmail.templateId = templateId
    smtpEmail.to = to
    smtpEmail.params = params
    smtpEmail.sender = {
      email: 'hola@descubriendolosastros.com',
      name: 'Mirova',
    }
    const response = await apiInstance.sendTransacEmail(smtpEmail)

    // console.log('Correo enviado correctamente:', response)

    return response
  } catch (error) {
    console.error(error)
  }
}
