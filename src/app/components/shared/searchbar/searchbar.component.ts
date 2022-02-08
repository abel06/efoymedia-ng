import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { Page } from 'src/app/data/models/page.model';
import { Search } from 'src/app/data/models/search';
import { Video } from 'src/app/data/models/video.model';
import { ViewType } from 'src/app/enums/view-type';
import { SearchService } from 'src/app/services/search.service';
import * as fromStore from '../../../store'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: string[];
  selectedString: string;

  page: Observable<Page>;
  videos: Observable<Video[]>;
  loaded: boolean = false;
  searchString : string | null;
  
  constructor(private searhcService: SearchService, private router: Router,private store: Store<fromStore.PageState>,) { }

  ngOnInit() {

    
    
    this.myControl.valueChanges.subscribe(value => {
      // this.searhcService.search(value).subscribe((res: Search) => {
      //   this.filteredOptions = res.result
      // })
    })
  }
  updateMySelection(value: string) {
    
    // this.store.select(fromStore.getVideoByCategory(ViewType.SEARCH)).subscribe(res=>{
    //   this.router.navigate(["/search", { response: res }])
    // })
    // this.store.dispatch(new fromStore.LaodVideosBySearch({ searchString: value }))
  }
}
