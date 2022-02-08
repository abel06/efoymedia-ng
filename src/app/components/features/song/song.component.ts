import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/data/models/page.model';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import * as fromStore from '../../../store'
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  view:string = ViewType.SONG
  page: Observable<Page>;
  videos: Observable<Video[]>;
  loaded: boolean = false;
  constructor(private store: Store<fromStore.PageState>) {
    this.videos = this.store.select(fromStore.getVideoByCategory(this.view))
  }


  ngOnInit(): void {

    this.videos?.subscribe(res => {
      this.loaded = res.length > 0
    })
    this.store.dispatch(new fromStore.LaodVideosByCategory({ category: this.view }))

  }

  loadMore(){
    console.log("called")
    this.videos?.subscribe(res=>{
      this.loaded=res.length > 0
    })
    this.store.dispatch(new fromStore.LaodVideosByCategory({category:this.view}))
  }
}
