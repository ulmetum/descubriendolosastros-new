import { ActionError } from '@/errors'
import { createSafeActionClient } from 'next-safe-action'

export const safeAction = createSafeActionClient({
  // Can also be an async function.
  handleServerError(error) {
    // console.log({ typeError: error instanceof ActionError })
    if (error instanceof ActionError) {
      return error.message
    }

    return 'No se pudieron recuperar los datos del servidor. Inténtalo de nuevo más tarde...'
  },
})
