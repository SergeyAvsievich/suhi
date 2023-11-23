export interface IMenu {
  max_pages: 0
  data: [
    {
      id: 0
      name: string
      filial: {
        id: 0,
        name: string
      },
      tt: {
        id: 0,
        name: string
      },
      active: true,
      export: [string]
    }
  ]
}

export interface IMenuQuery {
    filialId: number
    page?: number
    name?: string
    filial?: string
    tt?: string
    active?: 'active' | 'no_active' | ''
}