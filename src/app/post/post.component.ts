import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input() postList: Post[] = [];
  constructor(private postService: PostService) {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('init');
    this.postService
      .getPostFromRemoteService()
      .then((data) => (this.postList = data));
  }
}
