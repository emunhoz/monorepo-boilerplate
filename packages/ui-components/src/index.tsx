import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'

const CustomThemeProvider = ({ theme = createTheme, children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export * from './components/button/Button'
export { CustomThemeProvider }
