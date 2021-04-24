import React from 'react'
import { render, screen } from './utils/test-utils'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders button from @monorepo/ui-components', () => {
  render(<App />)
  const buttonMonorepo = screen.getByRole('button', { name: /button from @monorepo\/ui\-components/i })
  expect(buttonMonorepo).toBeInTheDocument()
})