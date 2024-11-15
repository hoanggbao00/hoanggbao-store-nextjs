interface TPagination<T> {
  data: T[];
  hasNextPage: boolean;
  page: number;
  total: number;
}

interface TPaginationParams extends Record<any, any> {
  limit?: number;
  page?: number;
  search?: string;
  category?: string;
  sort?: string;
}
