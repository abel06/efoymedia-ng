import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transaction, withTransaction } from '@datorama/akita';
import { VideoDTO } from 'src/app/data/models/video.dto';
import { getVideos } from 'src/app/state/video.data';
import { VideoStore } from 'src/app/state/stores/video.store';
import { environment } from 'src/environments/environment';
import { getPagedData } from 'src/app/utils/paginater';
import { ViewType } from 'src/app/enums/view-type';
import { FeatureStore } from '../state/stores/feature-store';
import { Feature } from '../data/models/feature.model';
import { catchError, Observable } from 'rxjs';
import { Video } from '../data/models/video.model';

@Injectable({ providedIn: 'root' })
export class VideoService {
  constructor(private http: HttpClient) { }


  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(environment.SERVER_URL + 'videos')
  }

  getVideoByCategory(category: string): Observable<Video[]> {

    return this.http.get<Video[]>(environment.SERVER_URL + (category != ViewType.HOME ? 'videos?category=' + category : 'videos'))
  }

  getVideoBySearch(searchString: string): Observable<Video[]> {
    console.log(searchString)
    return this.http.get<Video[]>(environment.SERVER_URL + 'query?search=' + searchString)
  }


}

