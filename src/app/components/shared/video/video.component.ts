import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/data/models/video.model';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent{
  @Input() video: Video;
  constructor() { }

  createUrl(url:string){
    return url 
  }
}
