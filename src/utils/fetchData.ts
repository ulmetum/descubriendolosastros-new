import { STRAPI_HOST, STRAPI_TOKEN } from '@/config'

export async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })

  if (res.status !== 200) {
    throw new Error('Hubo un error al obtener los datos')
  }

  const data: T = await res.json()

  return data
}
