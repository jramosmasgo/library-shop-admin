import { IResponseServer } from "./response";

export interface IResponsePageServer<T> extends IResponseServer<T> {
  pageNumber: number;
  pageSize: number;
  total: number;
}
