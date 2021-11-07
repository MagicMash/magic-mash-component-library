import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import usePagination from "../../src/hooks/usePagination";

describe("usePagination hook", () => {
  it("returns and updates the state of the current selected in the pagination index", () => {
    const { result } = renderHook(() => {
      return usePagination(3);
    });
    expect(result.current[0]).toEqual(0);

    let [selected, indexes, next, prev, target] = result.current
    act(() => next())
    expect(result.current[0]).toEqual(1);

    [selected, next, indexes, prev, target] = result.current
    act(() => prev())
    expect(result.current[0]).toEqual(0)
  });
  it('selects the target index if posible', () =>{
      const { result } = renderHook(() => {
          return usePagination(10)
      })
      expect(result.current[0]).toEqual(0);

      let [selected,indexes, next, prev, target] = result.current
      act(() => target(11))
      expect(result.current[0]).toEqual(0);

      act(() => target(5))
      expect(result.current[0]).toEqual(5);
  })
  it('update the indexes properly', () => {
      const { result } = renderHook(() => {
          return usePagination(10, 3)
      })
      let [selected, indexes, next, prev, target] = result.current
      const expectedInitialIndexes = [0, 1, 2]
      expect(indexes).toEqual(expectedInitialIndexes)

      act(() => target(5))
      const expectedIndexes = [5, 6, 7]
      expect(result.current[1]).toEqual(expectedIndexes)
  })
});
