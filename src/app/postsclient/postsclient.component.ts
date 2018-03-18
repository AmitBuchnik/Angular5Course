import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postsclient',
  templateUrl: './postsclient.component.html',
  styleUrls: ['./postsclient.component.css']
})
export class PostsclientComponent implements OnInit {
  titles: string[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getTitles().subscribe(data => this.titles = data);
  }
}