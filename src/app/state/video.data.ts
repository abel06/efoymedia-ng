// import * as faker from "faker";
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const count = 15;
const data:any = [];

// var faker = require('ng-faker');

// for (let i = 0; i < count; i++) {
//   data.push({
//     id: i,
//     username: i+"A",
//     text: "B+"+i
//   });
// }

export function getData(params = { page: 1 }) {
  const perPage = 10;
  const offset = (params.page - 1) * perPage;
  const paginatedItems = data.slice(offset, offset + perPage);
  const hasMore = offset + perPage !== data.length;

  return {
    currentPage: params.page,
    hasMore,
    perPage: perPage,
    total: data.length,
    lastPage: Math.ceil(data.length / perPage),
    data: paginatedItems
  };
}

export const getVideos = function(params?:any) {
  return timer(1000).pipe(mapTo(getData(params)));
};

export const getPaged = function(data:any,params?:any) {
  const perPage = 10;
  const offset = (params.page - 1) * perPage;
  const paginatedItems = data.slice(offset, offset + perPage);
  const hasMore = offset + perPage !== data.length;

  return {
    currentPage: params.page,
    hasMore,
    perPage: perPage,
    total: data.length,
    lastPage: Math.ceil(data.length / perPage),
    data: paginatedItems
  };
}
