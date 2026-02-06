import { describe, expect, it } from "vitest";
import { encodeState } from "./encodeState";

describe("encodeState", () => {
  it("should encode a state string properly", () => {
    const output = encodeState({ key1: "value1", key2: "value2" });
    expect(output).toBe("key1:value1;key2:value2");
  });
});
