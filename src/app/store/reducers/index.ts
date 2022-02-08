import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { VideosState } from 'src/app/state/stores/video.store'
import * as fromVideos from './videos.reducer'
import * as fromVideosAction from '../actions/videos.action'
import { getPagedData } from 'src/app/utils/paginater'
import { Video } from 'src/app/data/models/video.model'
//multiple videos state
export interface PageState {
    videos: fromVideos.VideoState
}

export const reducers: ActionReducerMap<PageState, fromVideosAction.VideosAction> = {
    videos: fromVideos.reducer,
}

export const getPageState = createFeatureSelector<PageState>('home')

export const getVideosState = createSelector(getPageState, (state: PageState) => state.videos)

export const getVideosEntities = createSelector(getVideosState, fromVideos.getVideoEntities)

export const getAllVideos = createSelector(getVideosEntities, (entities)=>{
    return Object.keys(entities).map(videoId=>entities[videoId])
})

export const getVideoByCategory  = (category:string)=> createSelector(getAllVideos, (videos)=>{
    console.log(videos)
    return videos.filter((video:Video)=>video.category.category === category )
})

export const getPaginated = createSelector(getVideosEntities, (entities)=>{
    return getPagedData(1,10,Object.keys(entities).map(videoId=>entities[videoId]))
})

export const getVideosLoaded = createSelector(getVideosState, fromVideos.getVideosLoaded)

export const getVideosLoading = createSelector(getVideosState, fromVideos.getVideosLoading)
