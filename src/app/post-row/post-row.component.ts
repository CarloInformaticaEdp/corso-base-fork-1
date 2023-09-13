import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post-row',
  templateUrl: './post-row.component.html',
})
export class PostRowComponent implements OnInit {
  @Input() post: Post | undefined;
  constructor() {}
  ngOnInit(): void {}
}
