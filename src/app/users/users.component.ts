import { Component, OnInit } from '@angular/core';

import { DalService } from '../dal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  url: string = "https://jsonplaceholder.typicode.com/users";
  text: string = "abcd";
  user: any = {};

  constructor(private service: DalService) { }

  ngOnInit() {
  }

  loadUser(id: number): void {
    this.service.getData(this.url + "/" + id).subscribe(user => {
      this.user = user;
    });
  }

  send(isDirty: boolean): void {
    if (isDirty) {
      console.log('post');
    }
  }
}
