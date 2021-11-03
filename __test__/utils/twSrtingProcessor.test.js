import { processTWClasses } from "../../src/utils/twStringsProcessor";

const baseString = " w-12 h-24 ";
const customString = " w-8 bg-blue-500 overflow ";
const stringsToBeExpected = " w-8 bg-blue-500 overflow h-24 ";

describe("processSritg takes two tw classes strings(base and custom) , and remove the overlapping tw classes form the base", () => {
  it(" removes the overlapping classes ", () => {
    const processedString = processTWClasses(baseString, customString);
    expect(processedString).toEqual(stringsToBeExpected);
  });
});
