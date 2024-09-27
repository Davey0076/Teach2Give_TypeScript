
import { assert, describe, expect, it } from 'vitest'
import {test} from "@total-typescript/exercise-cli"
import { handleResponse } from './handleResponse'

test('passes the test even with the error', () => {
    // there is no error in runtime
  
    expect(() =>
      HandleResponseOrThrowError({
        error: 'Invalid argument',
      }),
    ).not.toThrowError()
  
    // but the data is returned, instead of an error.
  
    expect(
      HandleResponseOrThrowError({
        error: 'Invalid argument',
      }),
    ).toEqual("Should this be 'Error'?")
  })

function HandleResponseOrThrowError(arg0: { error: string }): any {
    throw new Error('Function not implemented.')
}
