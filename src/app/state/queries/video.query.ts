// import { Injectable } from '@angular/core';
// import { QueryEntity } from '@datorama/akita';
// import { Video } from '../core/models/video.model';

// import { VideoState, VideoStore } from './video.store';

// @Injectable({
//   providedIn: 'root'
// })
// export class VideosQuery extends QueryEntity<VideoState, Video> {

//   constructor(protected override store: VideoStore) {
//     super(store);
//   }

//   getHasMore() {
//     return this.getValue().hasMore;
//   }

//   getPage() {
//     return this.getValue().page;
//   }

// }

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import { VideosState, VideoStore } from '../stores/video.store';

@Injectable({ providedIn: 'root' })
export class VideosQuery extends QueryEntity<VideosState, Video> {

  allVideos$ = this.selectAll();
  isLoading$ = this.selectLoading();
  // filteredByCategory$= this.selectAll({filterBy: ({ category, channel }) => category.category === this.getCategory() || channel.channelCategory.category === this.getCategory()})

  constructor(protected override store: VideoStore) {
    super(store);
  }

  getHasMore() {
    return this.getValue().hasMore
  }

  getPage() {
    return this.getValue().page
  }



  filterByCategory(categoryString:string){
    return this.selectAll({filterBy: ({ category, channel }) => category.category === categoryString || channel.channelCategory.category === categoryString})

  }
}

