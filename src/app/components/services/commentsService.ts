import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../../models/post";
import {Comment} from "../../models/comment";

@Injectable({
  providedIn: 'root'
})

export class CommentsService {


  constructor(private http: HttpClient) {

  }

  getComments() {
    return this.http.get<Comment []>('http://localhost:3000/comments/')
  }

}

