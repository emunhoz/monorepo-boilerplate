export interface Palette {
  primary: string
  secondary: string
  tertiary: string

  // Monochrome
  lightest: string
  lighter: string
  light: string
  mediumlight: string
  medium: string
  mediumdark: string
  dark: string
  darker: string
  darkest: string

  border: string

  // Status
  positive: string
  negative: string
  warning: string

  // Pastel
  paleOyster: string
  mountainMist: string
  nomad: string
  swirl: string
}

export const palette: Palette = {
  primary: '#7264d6',
  secondary: '#1EA7FD',
  tertiary: '#DDDDDD',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#222222',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#117900',
  negative: '#B90000',
  warning: '#E69D00',

  // Pastel
  paleOyster: '#978F77',
  mountainMist: '#8A888C',
  nomad: '#B3B1A5',
  swirl: '#D5D2C8'
}
