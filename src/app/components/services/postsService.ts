import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from "../../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {

  }

  getposts(){
    return this.http.get<Post []>('http://localhost:3000/posts/')
  }

  getpostById(id:number){
    return this.http.get<Post>('http://localhost:3000/posts/'+id)
  }

  deletepostById(id:number){
    return this.http.delete('http://localhost:3000/posts/'+id)
  }

  addPost(post:Post){
    return this.http.post('http://localhost:3000/posts/', post)
  }

  editpostById(post:Post, id:number){
    return this.http.put('http://localhost:3000/posts/'+id, Post)
  }



}

