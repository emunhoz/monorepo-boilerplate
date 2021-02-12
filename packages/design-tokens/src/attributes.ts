export type Attributes = {
  borderRadius: {
    small: number
    default: number
    big: number
  }
  boxShadow: {
    small: string
    hover: string
  }
}

export const attributes: Attributes = {
  borderRadius: {
    small: 5,
    default: 10,
    big: 20
  },
  boxShadow: {
    small: '0 0 46px 0 rgba(0, 0, 0, 0.13)',
    hover: '0 0 15px 0 rgba(0, 0, 0, 0.13)'
  }
}
