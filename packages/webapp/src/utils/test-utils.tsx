import createTheme from '@monorepo/design-tokens'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

const AllTheProviders = ({ children }: any) => (
  <ThemeProvider theme={createTheme}>
      {children}
  </ThemeProvider>
)

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
