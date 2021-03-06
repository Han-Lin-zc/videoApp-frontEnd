import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UploadEngineComponent} from './upload-engine/upload-engine.component';
import {BodyComponent} from './body/body.component';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {VideoComponent} from './video/video.component';
import {CommentComponent} from "./comment/comment.component";
import {CommentsViewComponent} from "./comments-view/comments-view.component";


/*
* The AppRoutingModule imports RouterModule and Routes so the app can have routing functionality.
* In this instance we have created a 'uploadEngine' route for when we call this component.
* Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
*
* The 'path' variable is a string that matches the URL in the browser address bar.
* The 'component' variable is the component that the router should create when navigating to this route.
* */
const routes: Routes = [
  {path: 'uploadEngine', component: UploadEngineComponent},
  {path: 'body', component: BodyComponent},
  {path: 'index', component: AppComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'videos', component: VideoComponent},
  {path: 'comments/:id', component: CommentComponent},
  {path: 'storedComments/:id', component: CommentsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
