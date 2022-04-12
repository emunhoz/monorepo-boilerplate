import { render, screen } from "../configs/test-utils"
import { Button } from "./Button"

test("Header contains correct text", () => {
  render(<Button primary={false} size={"small"} label={"Hello button"} onClick={jest.fn} />)
  const text = screen.getByText("Hello button")
  expect(text).toBeDefined()
})
