import {Component} from '@angular/core';
import {Post} from "../../models/post";
import {PostsService} from '../services/postsService'

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
  posts: Post[] = [];

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.getposts().subscribe({
      next: (data) => this.posts = data,
    })
  }

}
