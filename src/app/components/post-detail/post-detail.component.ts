import {Component} from '@angular/core';
import {PostsService} from "../services/postsService";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/post";
import {Comment} from "../../models/comment";
import {CommentsService} from "../services/commentsService";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  postId!: number;
  post!: Post;
  comments!: Comment[];
  newComments!: Comment [];

  constructor(
    private pS: PostsService, private ac: ActivatedRoute, private r: Router, private commentsService: CommentsService
  ) {
  }

  ngOnInit() {
    this.postId = this.ac.snapshot.params['id'];

    this.pS.getpostById(this.postId).subscribe({
      next: (data) => this.post = data,
    })

    this.commentsService.getComments().subscribe({
      next: (data) => {
        this.comments = data
        this.newComments = this.comments.filter((comment) => comment.postId == this.postId);
      },

    })



  }


}
