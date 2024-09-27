import {Equal, Expect } from "@total-typescript/helpers"
import { assert, describe, expect, it } from 'vitest'
import { parseValue } from "./parseValue"

it('Should handle a { data: { id: string } }', () => {
    const result = parseValue({
      data: {
        id: '123',
      },
    })
  
    type test = Expect<Equal<typeof result, string>>
  
    expect(result).toBe('123')
  })
  
  
  it('Should error when anything else is passed in', () => {
    expect(() => parseValue('123')).toThrow('Parsing error!')
  
    expect(() => parseValue(123)).toThrow('Parsing error!')
  })