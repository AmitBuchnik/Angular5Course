import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  age: number = 30;

  persons: any[] = [
    { 'name': 'Avi', 'age': 30 },
    { 'name': 'dana', 'age': 20 },
    { 'name': 'david', 'age': 45 }
  ];

  constructor() { }

  ngOnInit() {
  }
}
