import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ViewType } from 'src/app/enums/view-type';
import { HomesService } from '../state/homes.service';
import * as fromStore from '../../../../store'
import { Observable } from 'rxjs';
import { Page } from 'src/app/data/models/page.model';
import { getPagedData } from 'src/app/utils/paginater';
import { Video } from 'src/app/data/models/video.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  view:string = ViewType.HOME
  page: Observable<Page>;
  videos: Observable<Video[]>;
  loaded: boolean = false;
  constructor(private store: Store<fromStore.PageState> ) { 
    this.videos = this.store.select(fromStore.getAllVideos)
  }


  ngOnInit(): void {
  
    this.videos?.subscribe(res=>{
      this.loaded=res.length > 0
    })
    this.store.dispatch(new fromStore.LaodVideos([]))
    // this.store.dispatch(new fromStore.LaodVideosByCategory({category:ViewType.HOME}))

  }
}
