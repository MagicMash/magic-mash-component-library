import { render, screen, fireEvent } from "@testing-library/react";
import LinkGroup from "../../../src/components/navbar/navSections/linkGroup";

const bell = (
  <svg
    data-testid="icon"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 hover:transform hover:transition hover:scale-105 cursor-pointer "
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const baseLinks = [{ url: "/", text: "Test" }];

const iconHandler = jest.fn()

const linksWithIcon = [{withIcon: true, icon: bell, handler: iconHandler}]

describe("LinkGroup component", () => {

  it("renders the links", () => {
      render(<LinkGroup links={baseLinks} />);
      const link = screen.getByText('Test')
      expect(link).toBeInTheDocument()
  });
  it('renders the icons, and triggers the handler on the onClick event', async () => {
      render( <LinkGroup links={linksWithIcon} /> )
      const icon = await screen.findByTestId('icon')
      expect(icon).toBeInTheDocument()
      icon.parentNode.click()
      expect(iconHandler).toBeCalled()
  })
});
