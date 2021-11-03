import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/button/button";
import { processTWClasses } from "../../src/utils/twStringsProcessor";

const defaultClasses =
  "filter drop-shadow-3xl rounded-xl p-2 w-32 shadow-md text-white bg-darkBlue";
const defaultAlt = "no alt provided for this icon";
const defaultButtonType = "button";

describe("button component", () => {
  it("renders the default button", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    const text = screen.getByText("action");

    expect(button.className).toEqual(defaultClasses);
    expect(button.type).toEqual(defaultButtonType);
    expect(text).toBeInTheDocument();
  });
  it("renders the button with custom tw classes", () => {
    render(<Button classes="w-64" />);
    const expectedClasses = processTWClasses(defaultClasses, "w-64");
    const button = screen.getByRole("button");

    expect(button.className).toEqual(expectedClasses);
  });
  it("renders the button with custom text", () => {
    render(<Button text="test" />);
    const text = screen.getByText("test");
    expect(text).toBeInTheDocument();
  });
  it("renders the default and custom icon with the default alt", () => {
    render(<Button withIcon />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon.alt).toEqual(defaultAlt);
  });
  it("renders default and custom icon with custom alt when alt provided", () => {
    render(<Button withIcon iconAlt="custom alt" />);
    const expectedAlt = "custom alt";
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon.alt).toEqual(expectedAlt);
  });
  it("renders with custom type when provided", () => {
    render(<Button type="submit" />);
    const expectedButtonType = "submit";
    const button = screen.getByRole("button");
    expect(button.type).toEqual(expectedButtonType);
  });
  it("renders the icon button with custom classes", () => {
    render(<Button withIcon iconClasses="test" />);
    const expectedClasses = "test";
    const icon = screen.getByRole("img");
    expect(icon.className).toEqual(expectedClasses);
  });
  it("triggers the provided handler on click event", () => {
    const mock = jest.fn();
    render(<Button onClick={mock} />);
    const button = screen.getByRole("button");
    button.click()
    expect(mock).toBeCalledTimes(1)
  });
});
