import { Action } from "@ngrx/store";
import { Video } from "src/app/data/models/video.model";

//load videos we define the three things that code haapen when we load video    #define
export const LOAD_VIDEOS: string = '[Videos] load Videos'; //['Videos'] is optional its namespacing 
export const LOAD_VIDEOS_FAIL: string = '[Videos] load Videos fail';
export const LOAD_VIDEOS_SUCCESS: string = '[Videos] load Videos success';
export const LOAD_VIDEOS_BY_CATEGORY: string = '[Videos] load Videos by category';
export const LOAD_VIDEOS_BY_SEARCH: string = '[Videos] load Videos by category';
//action creaters  #create

export class LaodVideos implements Action {
    readonly type = LOAD_VIDEOS;
    constructor(public payload: any) {
    }
}

export class LaodVideosByCategory implements Action {
    readonly type = LOAD_VIDEOS_BY_CATEGORY;
    constructor(public payload: any) {
    }
}

// export class LaodVideosBySearch implements Action {
//     readonly type = LOAD_VIDEOS_BY_SEARCH;
//     constructor(public payload: any) {
//     }
// }


export class LaodVideosFail implements Action {
    readonly type = LOAD_VIDEOS_FAIL;
    constructor(public payload: any) {
    }
}

export class LaodVideosSuccess implements Action {
    readonly type = LOAD_VIDEOS_SUCCESS;
    constructor(public payload: Video[]) {
    }
}



//action types 

export type VideosAction = LaodVideos | LaodVideosByCategory| LaodVideosFail | LaodVideosSuccess 
// | LaodVideosBySearch

