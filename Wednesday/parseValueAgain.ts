type ValueWithData = {
    data: {
      id: string
    }
  }
  
  const hasDataId = (value: unknown): value is ValueWithData => {
    return (
      typeof value === 'object' &&
      value !== null &&
      'data' in value &&
      typeof (value as any).data === 'object' &&
      (value as any).data !== null &&
      'id' in (value as any).data &&
      typeof (value as any).data.id === 'string'
    )
  }
  
  const parseValue = (value: unknown) => {
    if (hasDataId(value)) {
      return value.data.id
    }
  
    throw new Error('Parsing error!')
  }
  
  const parseValueAgain = (value: unknown) => {
    if (hasDataId(value)) {
      return value.data.id
    }
  
    throw new Error('Parsing error!')
  }
  