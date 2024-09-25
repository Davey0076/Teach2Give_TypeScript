export function concatenate(...strings: Array<string>) {
   // Rest parameter 'strings' implicitly has an 'any[]' type.
      return strings.join("");
    }