export type APIResponse =
  | {
    data: {
      id: string
    }
  }
  | {
    error: string
  }

export const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?

  if ('data' in response) {
    return response.data.id
  } else {
    throw new Error(response.error)
  }
}