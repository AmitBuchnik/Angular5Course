import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component-4',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent4 implements OnInit, OnChanges {
  @Input() person: any = {};

  persons: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['person'] && !changes.person.firstChange) {
      let obj = {  
        firstName: changes['person'].currentValue.firstName,
        lastName: changes['person'].currentValue.lastName,
        city: changes['person'].currentValue.city
      };
      this.persons.push(obj);
    }  
  }
}
