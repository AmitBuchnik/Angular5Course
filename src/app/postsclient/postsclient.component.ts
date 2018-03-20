import { Component, OnInit } from '@angular/core';

import { DalService } from '../dal.service';

@Component({
  selector: 'app-postsclient',
  templateUrl: './postsclient.component.html',
  styleUrls: ['./postsclient.component.css']
})
export class PostsclientComponent implements OnInit {
  url: string = "https://jsonplaceholder.typicode.com/posts";  
  posts: string[];

  constructor(private service: DalService) { }

  ngOnInit() {
    this.service.getData(this.url).subscribe(data => this.posts = data);
  }
}
