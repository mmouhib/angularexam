import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'posts', component: ListPostsComponent},
  {path: 'addpost', component: AddPostComponent},
  {path: 'postdetail/:id', component: PostDetailComponent},
  //{path: 'tasks', component: TasksComponent},
  //{path: 'login', component: LoginComponent},
  //{path: 'add/:id', component: AddTaskComponent},
  //{path: 'details/:id', component: DetailTaskComponent},
  //{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
