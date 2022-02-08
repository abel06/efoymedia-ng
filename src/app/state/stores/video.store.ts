// import { Injectable } from '@angular/core';
// import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
// import { Video } from '../core/models/video.model';


// export interface VideoState extends EntityState<Video> {
//   hasMore: boolean;
//   page: number;
// }

// const initialState: VideoState = {
//   hasMore: true,
//   page: 1
// }

// @Injectable({ providedIn: 'root' })
// @StoreConfig({ name: 'videos' })
// export class VideoStore extends EntityStore<VideoState, Video> {

//   constructor() {
//     super(initialState);
//   }

//   updatePage(page: { hasMore: boolean, page: number }) {
//     this.update(page);
//   }

// }


import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ViewType } from 'src/app/enums/view-type';
import { Video } from '../../data/models/video.model';


export interface VideosState extends EntityState<Video, number> {
  hasMore: boolean;
  page: number;
}

const initialState: VideosState = {
  hasMore: true,
  page: 1,
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'videos',idKey: 'videoId' })
export class VideoStore extends EntityStore<VideosState> {

  constructor() {
    super(initialState);
  }

  updatePage(page: { hasMore: boolean, page: number}) {
    this.update(page);
  }
}