import { Injectable } from "@angular/core";
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap, catchError, of, take } from "rxjs";
import * as videoActions from '../actions/videos.action'
// import * as fromServices from '../../services'
import { VideoService } from "src/app/services/video.service";
import * as fromVideos from '../actions/videos.action'
import { action } from "@datorama/akita";
@Injectable()
export class VideoEffects {
    constructor(private actions$: Actions, private videoService: VideoService) { }

    loadVideos$ = createEffect(() =>
        this.actions$.pipe(ofType(videoActions.LOAD_VIDEOS)).pipe(
            switchMap(() => {
                return this.videoService.getAllVideos()
                    .pipe(
                        map(videos => new videoActions.LaodVideosSuccess(videos)),
                        catchError(error => of(new videoActions.LaodVideosFail(error)))
                    )
            }
            )
        )

    );

    loadVideosByCategory$ = createEffect(() => {
        return this.actions$.pipe(ofType(videoActions.LOAD_VIDEOS_BY_CATEGORY), map(action => action['payload']), switchMap((payload) => {
            return this.videoService.getVideoByCategory(payload['category'])
                .pipe(
                    map(videos => new videoActions.LaodVideosSuccess(videos)),
                    catchError(error => of(new videoActions.LaodVideosFail(error)))
                )
        }))
    });

    // loadVideosBySearch$ = createEffect(() => {
    //     return this.actions$.pipe(ofType(videoActions.LOAD_VIDEOS_BY_SEARCH), map(action => action['payload']), switchMap((payload) => {
    //         console.log(payload['searchString'])
    //         return this.videoService.getVideoBySearch(payload['searchString'])
    //             .pipe(
    //                 map(videos => new videoActions.LaodVideosSuccess(videos)),
    //                 catchError(error => of(new videoActions.LaodVideosFail(error)))
    //             )
    //     }))
    // });

}