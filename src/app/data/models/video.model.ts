import { ID } from '@datorama/akita';
import { Category } from './category.model';
import { Channel } from './channel.model';
export  interface Video{
  videoId: string;
  title: string;
  channel: Channel;
  publishedAt: Date;
  thumbnailsLow: string;
  thumbnailsHigh: string;
  thumbnailsMedium: string;
  thumbnailsLocal: string;
  url: string;
  description: string;
  ext: string;
  view_count: number;
  like_count: number;
  dislike_count: number;
  video: string;
  category: Category;
  }
  
  export function createVideo(params: Partial<Video>) {
    return {} as Video;
  }