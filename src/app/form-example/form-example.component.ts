import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  person: any = {
    'Name': '',
    'Age': 0,
    'Adult': false,
    'City': ''
  };

  constructor() { }

  submit(isValid: boolean): void {
    console.log(isValid);
    console.log(this.person);
  }

  ngOnInit() {
  }
}
