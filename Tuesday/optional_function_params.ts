const concatName = (first: string, last?: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };

  const result = concatName("David", "Okoth")
  const result2 = concatName("John")