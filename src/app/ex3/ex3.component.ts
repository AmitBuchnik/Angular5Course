import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
  persons: any[] = [
    { Name: 'Ron', Age: 20, City: 'Tel Aviv'},
    { Name: 'Dana', Age: 22, City: 'Netanya' },
    { Name: 'Dov', Age: 31, City: 'Kiryat Gat' },
    { Name: 'Shula', Age: 18, City: 'Givat Shmuel'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
