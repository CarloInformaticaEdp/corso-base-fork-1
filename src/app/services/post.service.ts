import { Injectable } from '@angular/core';
import { Post } from '../models/post';

Injectable();
export class PostService {
  private POST_LINK = 'https://jsonplaceholder.typicode.com/posts';

  public testPostService(): Post[] {
    this.getPostFromRemoteService();
    return [
      {
        body: 'Hi!',
        title: 'Title This',
      },
    ] as Post[];
  }

  public getPostFromRemoteService(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      fetch(this.POST_LINK).then((rawData) =>
        rawData.json().then((parsed) => resolve(parsed))
      );
    });
  }
}
