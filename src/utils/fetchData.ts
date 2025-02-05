import { STRAPI_HOST, STRAPI_TOKEN } from '@/config'
import { ActionError } from '@/errors'

type ErrorType =
  | 'ErrorLandingPages'
  | 'ErrorMenu'
  | 'ErrorWriter'
  | 'ErrorArticles'

const errorMessages: Record<ErrorType, string> = {
  ErrorLandingPages: 'Hubo un error al obtener los datos de los temas',
  ErrorMenu: 'Hubo un error al obtener los datos del menú principal del sitio',
  ErrorWriter: 'Hubo un error al obtener los datos del escritor',
  ErrorArticles: 'Hubo un error al obtener los datos de los artículos',
}

export async function fetchData<T>(
  url: string,
  typeError: ErrorType
): Promise<T> {
  const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })

  // console.log({ res })

  if (!res.ok && errorMessages[typeError]) {
    throw new ActionError(errorMessages[typeError])
  }

  const data: T = await res.json()

  return data
}
