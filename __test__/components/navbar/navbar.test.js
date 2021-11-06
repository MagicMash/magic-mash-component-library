import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../../src/components/navbar/navbar";

jest.mock("../../../src/components/navbar/navSections/linkGroup", function () {
  return {
    __esModule: true,
    default: () => <h1>Link Group</h1>,
  };
});

jest.mock("../../../src/components/navbar/navSections/logo", function () {
  return {
    __esModule: true,
    default: () => <h1>Logo</h1>,
  };
});

jest.mock("../../../src/components/navbar/navSections/user", function () {
  return {
    __esModule: true,
    default: () => <h1>User</h1>,
  };
});

describe("navbar component", () => {
  it("renders the logo, linkGroup and user child components", () => {
    const { rerender } = render(<Navbar withLinks />);
    const withLinks = screen.getByRole("heading");
    expect(withLinks.textContent).toEqual("Link Group");

    rerender(<Navbar withLogo />);
    const withLogo = screen.getByRole("heading");
    expect(withLogo.textContent).toEqual("Logo");

    rerender(<Navbar withUser />);
    const withUser = screen.getByRole("heading");
    expect(withUser.textContent).toEqual("User");
  });
});
