import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={createTheme}>
    {children}
  </ThemeProvider>
)

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }

