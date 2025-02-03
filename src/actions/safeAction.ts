import { ActionError } from '@/errors'
import { createSafeActionClient } from 'next-safe-action'

export const safeAction = createSafeActionClient({
  // Can also be an async function.
  handleServerError(error) {
    // console.log({ typeError: error instanceof ActionError })
    if (error instanceof ActionError) {
      return error.message
    }

    return 'Generic server error action'
  },
})
// import { createSafeActionClient } from 'next-safe-action'

// export const safeAction = createSafeActionClient({
//   // Can also be an async function.
//   handleServerError(e) {
//     // Log to console.
//     console.error('Action error:', e.message)

//     // Return generic message
//     return { message: 'Algo falló al obtener los datos del servidor' }
//   },
// })
