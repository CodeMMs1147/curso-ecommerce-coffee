export type FilterTypes = {
  result: ResultFiltersType | null,
  loading:   boolean,
  error: string
}

export type ResultFiltersType = {
  schema: {
    attributes: {
      origin: {
        enum: any,
      }
    }
  }
}