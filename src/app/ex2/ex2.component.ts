import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  text1: string = '';
  text2: string = '';

  constructor() { }

  ngOnInit() {
  }

  checkText3(text: string): void {
    if (text.length > 6) {
      const temp: string = this.text1;
      this.text1 = this.text2;
      this.text2 = temp;
    }
  }
}
