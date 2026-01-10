import { STRAPI_HOST, STRAPI_TOKEN } from '@/config'
import { ActionError, errorMessages, ErrorType } from '@/errors'

export async function fetchData<T>(
  url: string,
  typeError: ErrorType
): Promise<T> {
  console.log({ STRAPI_HOST, url })
  const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })

  if (!res.ok && errorMessages[typeError]) {
    throw new ActionError(errorMessages[typeError])
  }

  const data: T = await res.json()

  return data
}
