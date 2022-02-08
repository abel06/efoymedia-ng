import { ID } from '@datorama/akita';
import { Category } from './category.model';
import { Channel } from './channel.model';
import { Video } from './video.model';
export interface Feature {
    key: string,
    page: number,
    data: Video[],
    hasMore: boolean
}

export function createFeature(params: Partial<Feature>) {
    return {} as Feature;
}