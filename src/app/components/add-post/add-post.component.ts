import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostsService} from "../services/postsService";
import {Post} from "../../models/post";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(private r: Router, private service: PostsService) {
  }

  addPostForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    content: new FormControl('', [
      Validators.required,
    ]),
    author: new FormControl('', [
      Validators.required,
    ]),
  });

  get title() {
    return this.addPostForm.get('title');
  }

  get content() {
    return this.addPostForm.get('content');
  }

  get author() {
    return this.addPostForm.get('author');
  }

  navigate() {
    // todo: add post here

    const post = new Post();


    console.log(this.addPostForm.value)

    this.service.addPost(this.addPostForm.value as Post).subscribe(
      () => this.r.navigate(['/posts'])
    );

  }

}
