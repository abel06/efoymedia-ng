import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Page } from 'src/app/data/models/page.model';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import * as fromStore from '../../../store'
@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.scss']
})
export class SearchviewComponent implements OnInit {
  view: string = ViewType.SEARCH
  page: Observable<Page>;
  videos: Observable<Video[]>;
  loaded: boolean = false;
  searchString : string | null;
  constructor(private store: Store<fromStore.PageState>,private router: ActivatedRoute) {
    // this.videos = this.router.snapshot.paramMap.get('res')
    this.videos = this.store.select(fromStore.getVideoByCategory(this.view))
    // this.videos.subscribe(res=>{
    // })
  }


  ngOnInit(): void {
   console.log(this.searchString)
    this.videos?.subscribe(res => {
      this.loaded = res.length > 0
    })
    // this.store.dispatch(new fromStore.LaodVideosBySearch({ searchString: this.searchString }))

  }

  loadMore() {
    this.videos?.subscribe(res => {
      this.loaded = res.length > 0
    })
    // this.store.dispatch(new fromStore.LaodVideosBySearch({ searchString: this.searchString}))
  }
}
