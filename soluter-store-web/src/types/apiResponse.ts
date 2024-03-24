import { ProductType } from "./products";

export interface ProductsResponse {
  content: ProductType[];
  pageable: ApiListPageableResponse;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: { empty: boolean; unsorted: boolean; sorted: boolean };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface ApiListPageableResponse {
  pageNumber: number;
  pageSize: number;
  sort: { empty: boolean; unsorted: boolean; sorted: boolean };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
