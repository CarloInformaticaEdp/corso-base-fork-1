import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  public postList: Post[] = [];
  constructor(private postService: PostService) {
    console.log('costruttore');
  }

  ngOnInit(): void {
    this.postList = this.postService.testPostService();
    console.log('init');
  }
}
