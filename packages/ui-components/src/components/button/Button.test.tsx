import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { Button } from './Button'

test("Header contains correct text", () => {
  render(<Button primary={false} size={"small"} label={"Hello button"} onClick={console.log} />)
  const text = screen.getByText("Hello button")
  expect(text).toBeDefined()
})
