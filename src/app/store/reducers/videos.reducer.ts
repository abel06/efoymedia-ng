import * as fromVideos from '../actions/videos.action'
import { Video } from "src/app/data/models/video.model";
import { state } from '@angular/animations';

export interface VideoState {
    entities: { [id: number]: Video },
    loaded: boolean,
    loading: boolean
}

//video single video state
export const initialState: VideoState = {
    entities: {},
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromVideos.VideosAction): VideoState {
    switch (action.type) {

        case fromVideos.LOAD_VIDEOS:
            {
                return {
                    ...state,
                    loading: true,

                }
            }
        case fromVideos.LOAD_VIDEOS_BY_CATEGORY:
            {
                return {
                    ...state,
                    loading: true,

                }
            }
        case fromVideos.LOAD_VIDEOS_SUCCESS:
            {
                const videos = action.payload
                console.log(videos)

                const entities = videos.reduce((entities: { [id: number]: Video }, video: Video) => {
                    return {
                        ...entities,
                        [video.videoId]: video
                    }
                }, {
                    ...state.entities,

                }
                );
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    entities,
                }
            }

        case fromVideos.LOAD_VIDEOS_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: false
                }
            }
        default: return state
    }

}



//Lets define selectors

export const getVideoEntities = (state: VideoState) => state.entities
export const getVideosLoading = (state: VideoState) => state.loading
export const getVideosLoaded = (state: VideoState) => state.loaded
