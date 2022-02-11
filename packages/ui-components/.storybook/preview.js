import { ThemeProvider } from 'styled-components'
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
      <center>
        <Story />
      </center>
    </ThemeProvider>
  ),
];