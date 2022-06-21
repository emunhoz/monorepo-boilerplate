import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'

console.log(createTheme, 'createTheme')

const CustomThemeProvider = ({ theme = createTheme, children }: any) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export * from './components/button/Button'
export { CustomThemeProvider }

