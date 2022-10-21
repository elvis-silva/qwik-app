import matchers from '@testing-library/jest-dom/matchers';
import { expect, it } from 'vitest';
import Header from './header'

expect.extend(matchers);

it("should render", async () => {
  

  // let result: HTMLElement;
  // await waitFor(() => {
  //   result = document.getElementById("header") as HTMLElement
  // }).then(
  //   () => {
  //     expect(queryByTestId(result, "header")).toBeInTheDocument()
  //     expect(result).toMatchSnapshot()
  //   }
  // )
})