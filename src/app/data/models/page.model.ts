export class Page {
    currentPage: number;
    hasMore: boolean;
    perPage: number;
    offset: number;
    total: number;
    lastPage: number;
    paginatedItems: any;
    data: any

    constructor(currentPage: number,
        perPage: number,
        data: any) {
        this.perPage =perPage? perPage : 10;
        this.currentPage = currentPage
        this.offset = (this.currentPage - 1) * this.perPage;
        this.hasMore = this.offset + this.perPage !== data.length;
        this.total = data.length
        this.lastPage = Math.ceil(data.length / this.perPage);
        this.paginatedItems = data.slice(this.offset, this.offset + this.perPage);

    }
}