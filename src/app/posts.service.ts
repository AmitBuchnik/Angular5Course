import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  getTitles() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }
}
