import { render, screen } from "@testing-library/react";
import { wrappWithLink } from "../../src/utils/wrappWithLink";

describe("wrappWithLink helper function", () => {
  it("returns the component inside a Link component", () => {
    const testComponent = <h1>Test</h1>;
    const testLink = wrappWithLink("/", testComponent);

    render(testLink);

    const anchor = screen.getByRole("heading");
    expect(anchor.textContent).toEqual("Test");
  });
});
