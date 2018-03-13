import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component-4',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent4 implements OnInit {
  firstName: string = "";
  lastName: string = "";
  city: string = "";

  person: any = {
    firstName: "",
    lastName: "",
    city: ""
  };


  constructor() { }

  ngOnInit() {
  }

  add(): void{
    this.person = {
      firstName: this.firstName,
      lastName: this.lastName,
      city: this.firstName
    }
  }
}
