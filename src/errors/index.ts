export type ErrorType =
  | 'ErrorLandingPages'
  | 'ErrorMenu'
  | 'ErrorWriter'
  | 'ErrorArticles'
  | 'ErrorFormContact'

export const errorMessages: Record<ErrorType, string> = {
  ErrorLandingPages: 'Hubo un error al obtener los datos de los temas',
  ErrorMenu: 'Hubo un error al obtener los datos del menú principal del sitio',
  ErrorWriter: 'Hubo un error al obtener los datos del autor',
  ErrorArticles: 'Hubo un error al obtener los datos de los artículos',
  ErrorFormContact:
    'Se ha producido un error en el envío de tu comentario. Por favor, vuelve a intentarlo más tarde o ponte en contacto conmigo directamente a través del correo electrónico',
}

export class ActionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ActionError'
  }
}
export class ErrorImage extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorImage'
  }
}

export class ErrorMenu extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorMenu'
  }
}

export class ErrorArticles extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorArticles'
  }
}

export class ErrorLandingPages extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorLandingPages'
  }
}

export class ErrorArticle extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorArticle'
  }
}

export class ErrorWriter extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorWriter'
  }
}

export class ErrorPage extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ErrorPage'
  }
}
