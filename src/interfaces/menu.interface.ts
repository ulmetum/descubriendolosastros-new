export interface Menu {
  data: DatumMenu[]
}

export interface DatumMenu {
  id: number
  documentId: string
  name: string
  menuElements: MenuElement[]
}

export interface MenuElement {
  id: number
  label: string
  url: string
}
