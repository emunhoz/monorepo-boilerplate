/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

const AllTheProviders = ({ children }: any) => (
  <ThemeProvider theme={createTheme}>
    {children}
  </ThemeProvider>
)

const customRender: any = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }

