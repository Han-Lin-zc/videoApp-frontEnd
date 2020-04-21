import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllVideosFromAWS(): Observable<any> {
    return this.http.get(this.API + 'video/');
  }

  getVideoFromAWS(videoId: number): Observable<any> {
    return this.http.get(this.API + 'video/' + videoId);
  }

  uploadVideo(video, title): Observable<HttpEvent<any>> {
    const body = new FormData();
    body.append('file', video);
    body.append('videoName', title);
    console.log(title);
    const httpRequest = new HttpRequest('POST', this.API + 'video/upload', body, {
      reportProgress: true,
        responseType: 'json'
    });
    return this.http.request(httpRequest);
  }

  addCommentToVideoArray(comment: string, id: number) {
    const httpRequest = new HttpRequest('PUT', this.API + 'video/comment/' + id, comment);
    return this.http.request(httpRequest);
  }
}
