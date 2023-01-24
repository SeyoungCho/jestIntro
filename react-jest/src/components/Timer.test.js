import Timer from "./Timer";
import { render } from "@testing-library/react";

test("초 표시", () => {
  Date.now = jest.fn(() => 123456789);
  const view = render(<Timer />);
  expect(view).toMatchSnapshot();
});
