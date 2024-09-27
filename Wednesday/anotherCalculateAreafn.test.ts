import { anotherCalculateArea } from "./anotherCalculateAreafn"
import {expect, it} from "vitest"
import {Equal, Expect} from "@total-typescript/helpers"


it('Should calculate the area of a circle when no kind is passed', () => {
    const result = anotherCalculateArea({
  //Argument of type '{ radius: number; }' is not assignable to parameter of type 'Shape'.
   // Property 'kind' is missing in type '{ radius: number; }' but required in type 'Circle'.
      radius: 5,
    })
  
    expect(result).toBe(78.53981633974483)
  
    type test = Expect<Equal<typeof result, number>>
  })