import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DalService {

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url).map((res: Response) => res.json());
  }
}
