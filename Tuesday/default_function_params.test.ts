import { concatName } from "./default_function_params";
import { assert, describe, expect, it } from 'vitest'
import { Expect, Equal} from "@total-typescript/helpers"

it("should return the full name", () => {
    const result = concatName("John", "Doe");
  
    type test = Expect<Equal<typeof result, string>>;
  
    expect(result).toEqual("John Doe");
  });

  it("should return the first name", () => {
    const result = concatName("John");
  
    type test = Expect<Equal<typeof result, string>>;
  
    expect(result).toEqual("John Pocock");
  });