import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html',
})
export class PostEditComponent implements OnInit {
  id: number | undefined;
  post: Post | undefined;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.postService
        .getPostWithId(this.id)
        .then((post) => (this.post = post));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
