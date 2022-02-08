import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store'
import { Observable } from 'rxjs';
import { Page } from 'src/app/data/models/page.model';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  view: string = ViewType.MOVIE
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
