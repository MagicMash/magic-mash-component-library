import { renderHook } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import useModal from "../../src/hooks/useModal";

describe("useModal hook", () => {
  it("returns false initially", () => {
    const { result } = renderHook(() => {
      return useModal();
    });
    const [isOpen, toggleModal, modal] = result.current;
    expect(isOpen).toBeFalsy();
  });
  it("toggles the value with handler", () => {
    const { result } = renderHook(() => {
      return useModal();
    });

    const [isOpen, toggleModal, modal] = result.current;

    expect(isOpen).toBeFalsy();
    act(() => toggleModal());
    expect(result.current[0]).toBeTruthy();
  });

  it('returns the "put iside modal" function that returns the jsx wrapped by the Modal', () => {
    const { result } = renderHook(() => {
      return useModal(true);
    });
    const [initIsOpen, iniTtoggleModal, initModal] = result.current;
    const modal = initModal(<h1>Test</h1> , " ");
    render(modal);
    const test = screen.getByRole("heading", {
      name: "Test",
    });
    expect(test).toBeInTheDocument();
  });
});
