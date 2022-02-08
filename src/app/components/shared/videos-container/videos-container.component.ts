import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { combineLatest, map, Observable, pipe, take } from 'rxjs';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import { VideoService } from 'src/app/services/video.service';
import { VideosQuery } from 'src/app/state/queries/video.query';
import { getPagedData } from 'src/app/utils/paginater';
import { HomesQuery } from '../../features/home/state/homes.query';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store'
import { Page } from 'src/app/data/models/page.model';
import { Paginated } from 'src/app/data/models/pagineted.model';
import { getPaged } from 'src/app/state/video.data';
import { async } from '@angular/core/testing';
import { getPaginated } from '../../../store';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.scss']
})
export class VideosContainerComponent implements OnInit ,OnChanges{
  @Input() view: string
  @Input() page: Page | null;
  @Input() videos: Video[] | null
  @Output() loadMore = new EventEmitter<string>();

  page$:Page;
  pagedVideos: Video[]



  isLoading$: Observable<boolean>;


  constructor(
    private store: Store<fromStore.PageState>
  ) { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
  
    if(!this.page){
    this.page = getPagedData(1,10,this.videos)
    this.pagedVideos = this.page.paginatedItems
    }else {
      this.page = getPagedData(this.page.currentPage,10,this.videos)
      this.pagedVideos = this.page.paginatedItems
    }

  }

  onScroll() {
    if (this.page?.hasMore){
      this.page = getPagedData(this.page.currentPage+1,10,this.videos)
      this.pagedVideos= this.pagedVideos.concat(this.page.paginatedItems)
    }else {
      this.loadMore.emit();
    }
    
  }

}