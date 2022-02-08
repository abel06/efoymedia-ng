import { Page } from "../data/models/page.model";

export const getPagedData = function (pageIndex: number,perPage:number,data: any) {
  const page = new Page(pageIndex,perPage, data )
  return page

}