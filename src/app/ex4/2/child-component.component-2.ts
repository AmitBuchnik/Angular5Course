import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component-2',
  templateUrl: './child-component.component-2.html',
  styleUrls: ['./child-component.component-2.css']
})
export class ChildComponentComponent implements OnInit {
  text: string = "";

  @Input() name: string = "";
  @Input() age: string = "";
  @Input() isDrivingLicense: boolean = false;
  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.notify.emit(this.text);
  }
}
