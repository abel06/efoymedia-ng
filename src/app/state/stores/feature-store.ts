import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Feature } from 'src/app/data/models/feature.model';
import { ViewType } from 'src/app/enums/view-type';
import { Video } from '../../data/models/video.model';


export interface FeatureState extends EntityState<Feature, string> {
    key: string;
    page: number;
    video: Video[];
    hasMore: boolean;
}

const initialState: FeatureState = {
    key: ViewType.HOME,
    page: 1,
    video: [],
    hasMore: true,
    
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'features', idKey: 'key' })
export class FeatureStore extends EntityStore<FeatureState> {

    constructor() {
        super(initialState);
    }

    updateFeature(feature: FeatureState ) {
        this.update(feature);
    }
}