import { palette, Palette } from './palette'
import { typography, Typography } from './typography'
import { attributes, Attributes } from './attributes'
import { breakpoints, Breakpoints } from './breakpoints'

export interface Theme {
  palette?: Palette
  typography?: Typography
  attributes?: Attributes
  breakpoints?: Breakpoints
}

const createTheme = ({ palette, typography, attributes, breakpoints }: Theme) => ({ palette, typography, attributes, breakpoints })

export default createTheme({ palette, typography, attributes, breakpoints })
