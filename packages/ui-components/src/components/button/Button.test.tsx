import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { Button } from './Button'

test('Header contains correct text', () => {
  render(<Button primary={false} size={'small'} label={'Hello button'} onClick={console.log} />)
  const text = screen.getByText('Hello button')
  expect(text).toBeDefined()
})
