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
