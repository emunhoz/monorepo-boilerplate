import { attributes, Attributes } from './attributes'
import { breakpoints, Breakpoints } from './breakpoints'
import { palette, Palette } from './palette'
import { typography, Typography } from './typography'

interface Theme {
  palette: Palette
  typography: Typography
  attributes: Attributes
  breakpoints: Breakpoints
}

const theme: Theme = {
  palette, typography, attributes, breakpoints
}

const createTheme = ({ ...theme }: Theme) => ({ ...theme })

export default createTheme({ ...theme})
