export const getInvalidatesTags =
  <T>(tags: T[]) =>
  (result: any, err: any) => {
    return !result && err ? [] : tags
  }
