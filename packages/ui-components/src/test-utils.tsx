import { render } from '@testing-library/react'
import { CustomThemeProvider } from './index'

const AllTheProviders = ({ children }: any) => <CustomThemeProvider>{children}</CustomThemeProvider>

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
