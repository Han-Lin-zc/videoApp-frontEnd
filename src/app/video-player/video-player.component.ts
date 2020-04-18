import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatVideoComponent} from "mat-video/lib/video.component";


@Component({
  selector: 'app-videoscroll',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']

})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video') matVideo: MatVideoComponent;
  video: HTMLVideoElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.video = this.matVideo.getVideoTag();

    // Use Angular renderer or addEventListener to listen for standard HTML5 video events

    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
    this.video.addEventListener('ended', () => console.log('video ended'));
  }





}