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
  action: 'respond' | 'not-respond'
  type: 'contact' | 'products'
}

export const sendEmail = async ({
  to,
  templateId,
  params,
  subject,
  action, // Indica si se debe enviar un correo de respuesta automática tras recibir una respuesta del webhook
  type, // El tipo de formulario que se envía
}: Props) => {
  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    const customHeader: Record<string, any> = {
      name: params.name,
      email: params.email,
    }

    if (type === 'products') {
      customHeader['city'] = params.city
      customHeader['postalCode'] = params.postalCode
      customHeader['product'] = params.product
      customHeader['countryEvent'] = params.countryEvent
      customHeader['cityEvent'] = params.cityEvent
      customHeader['dateEvent'] = params.dateEvent
      customHeader['timeEvent'] = params.timeEvent
      customHeader['event'] = params.event
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
    smtpEmail.tags = [action, type]
    smtpEmail.params = params
    smtpEmail.sender = {
      email: 'hola@descubriendolosastros.com',
      name: 'Míriam',
    }
    smtpEmail.headers = {
      'X-Mailin-Custom': encryptedData,
    }
    const response = await apiInstance.sendTransacEmail(smtpEmail)

    return response
  } catch (error) {
    console.error(error)
  }
}
