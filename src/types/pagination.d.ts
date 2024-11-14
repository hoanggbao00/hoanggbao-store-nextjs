interface TPagination<T> {
  data: T[];
  hasNextPage: boolean;
  page: number;
  total: number;
}
