import { Action } from "@ngrx/store";
import { Page } from "src/app/data/models/page.model";



export const LOAD_PAGE: string = '[Page] load page'; //['Videos'] is optional its namespacing 
export const LOAD_PAGE_FAIL: string = '[Page] load page fail';
export const LOAD_PAGE_SUCCESS: string = '[Page] load page success';

//action creaters  #create

export class LoadPage implements Action {
    readonly type = LOAD_PAGE;
    
    payload:Page;
    constructor(public data: Page) { 
        this.payload = data
    }
}

export class LoadPageFail implements Action {
    readonly type = LOAD_PAGE_FAIL;
    // constructor(public payload: any) { } //a message why it is failed as a payload
    payload:Page;
    constructor(public data: Page) { 
        this.payload = data
    }
}

export class LoadPageSuccess implements Action {
    readonly type = LOAD_PAGE_SUCCESS;
    payload:Page;
    constructor(public data: Page) { 
        this.payload = data
    }

}

//action types 

export type PageAction = LoadPage | LoadPageSuccess | LoadPageFail