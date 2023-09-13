import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable()
export class PostService {
  private POST_LINK = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

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
      this.httpClient
        .get<Post[]>(this.POST_LINK) // posso stabilire il tipo di ritorno
        .pipe(first())
        .subscribe({
          next: (posts) => resolve(posts),
          error: () => resolve([]),
        });
    });
  }

  /** @deprecated
   * Questo utilizza approccio vecchio e scomodo
   * */
  public _getPostFromRemoteService(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      fetch(this.POST_LINK).then((rawData) =>
        rawData.json().then((parsed) => resolve(parsed))
      );
    });
  }
}
