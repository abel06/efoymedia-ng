import { filter } from "rxjs";
import { Page } from "./page.model";

export class Paginated {
    // currentPage: number;
    // hasMore: boolean;
    // perPage: number;
    // offset: number;
    // total: number;
    // lastPage: number;
    // pages: any;
    // rawData: any

    // constructor(currentPage: number, perPage: number, data: any) {
    //     this.currentPage = currentPage
    //     this.rawData = data
    //     this.offset = (currentPage - 1) * perPage;
    //     this.hasMore = this.offset + perPage !== data.length;
    //     this.perPage = perPage
    //     this.total = data.length
    //     this.lastPage = Math.ceil(data.length / perPage);
    //     this.pages = new Page(currentPage, data.slice(this.offset, this.offset + perPage))

    // }

    // getPage(index:number){
    //     return this.pages.get(index);
    // }
}