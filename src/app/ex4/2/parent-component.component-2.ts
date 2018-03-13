import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component-2',
  templateUrl: './parent-component.component-2.html',
  styleUrls: ['./parent-component.component-2.css']
})
export class ParentComponentComponent implements OnInit {
  name: string = "";
  age: string = "";
  isDrivingLicense: boolean = false;

  textFromChild: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  getTextFromChild(text: string) {
    this.textFromChild = text;
  }
}
