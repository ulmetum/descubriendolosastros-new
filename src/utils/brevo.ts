import { API_KEY_BREVO, CRYPTO_KEY } from '@/config'
import * as brevo from '@getbrevo/brevo'
import CryptoJS from 'crypto-js'

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
  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    const customHeader = {
      name: params.name,
      email: params.email,
    }

    const iv = CryptoJS.lib.WordArray.random(16)

    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(customHeader),
      CRYPTO_KEY as string,
      { iv }
    ).toString()

    smtpEmail.subject = subject
    smtpEmail.templateId = templateId
    smtpEmail.to = to
    smtpEmail.params = params
    smtpEmail.sender = {
      email: 'hola@descubriendolosastros.com',
      name: 'Mirova',
    }
    smtpEmail.headers = {
      'X-Mailin-Custom': encryptedData, // Agregar el header personalizado
    }
    const response = await apiInstance.sendTransacEmail(smtpEmail)

    return response
  } catch (error) {
    console.error(error)
  }
}
