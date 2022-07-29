import { attributes, Attributes } from './src/attributes'
import { breakpoints, Breakpoints } from './src/breakpoints'
import { palette, Palette } from './src/palette'
import { typography, Typography } from './src/typography'

interface Theme {
  palette: Palette
  typography: Typography
  attributes: Attributes
  breakpoints: Breakpoints
}

const theme: Theme = {
  palette,
  typography,
  attributes,
  breakpoints
}

const createTheme = ({ ...theme }: Theme) => ({ ...theme })

export default createTheme({ ...theme })
