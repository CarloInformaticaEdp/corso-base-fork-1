import { Injectable } from '@angular/core';
import { Post } from '../models/post';

Injectable();
export class PostService {
  public testPostService(): Post[] {
    return [
      {
        body: 'Hi!',
        title: 'Title This',
      },
    ];
  }
}
