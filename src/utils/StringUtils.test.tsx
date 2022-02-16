import { stripName } from "./StringUtils";

it("should strip name", () => {
    expect(stripName("John Doe")).toBe("John");
})