import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  public getPosts() {
    return this.httpClient.get(
      `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`
    );
  }
}
