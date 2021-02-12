import React from 'react'
import { ThemeProvider } from 'styled-components'
import createTheme from '@monorepo/design-tokens'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
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