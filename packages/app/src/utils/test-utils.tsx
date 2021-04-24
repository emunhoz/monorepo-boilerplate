import createTheme from '@monorepo/design-tokens'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const AllTheProviders = ({ children }: any) => (
  <ThemeProvider theme={createTheme}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </ThemeProvider>
)

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
