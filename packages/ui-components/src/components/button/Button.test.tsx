import React from 'react'
import { render, fireEvent, screen } from '../../utils/test-utils'
import { Button } from './Button'

describe('[Component]: Button', () => {
  const mockOnClickFunction = jest.fn()

  test('render the component', () => {
    const { asFragment } = render(<Button onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render negative style', () => {
    const { asFragment } = render(<Button negative onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render ghost style', () => {
    const { asFragment } = render(<Button ghost onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render component with small size style', () => {
    const { asFragment } = render(<Button size="small" onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('render component with big size style', () => {
    const { asFragment } = render(<Button size="big" onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should trigger function when button is pressed', () => {
    render(<Button onClick={mockOnClickFunction}>Hello world</Button>)

    fireEvent.click(screen.getByText('Hello world'))

    expect(mockOnClickFunction).toHaveBeenCalled()
  })

  test('render component disabled', () => {
    const { asFragment } = render(<Button disabled onClick={mockOnClickFunction}>Hello world</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})
