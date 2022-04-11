import { render, screen } from "@commons/theme-test-setup"
import { Button } from "./Button"

test("Header contains correct text", () => {
  render(<Button primary={false} size={"small"} label={"Hello button"} onClick={jest.fn} />)
  const text = screen.getByText("Hello button")
  expect(text).toBeDefined()
})
