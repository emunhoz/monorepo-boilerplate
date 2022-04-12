import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme}>
      <Story />
    </ThemeProvider>
  )
]
