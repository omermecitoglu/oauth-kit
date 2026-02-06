import { describe, expect, it } from "vitest";
import { decodeState } from "./decodeState";

describe("decodeState", () => {
  it("should decode a state string properly", () => {
    const output = decodeState("key1:value1;key2:value2");
    expect(output).toEqual({ key1: "value1", key2: "value2" });
  });
});
