export interface ProductTypes {
  id: string;
  title: string;
  description: string;
  cost: number;
  file: string;
  quantity: number;
}

export interface FetchBooksResponseTypes {
  rows: ProductTypes[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
