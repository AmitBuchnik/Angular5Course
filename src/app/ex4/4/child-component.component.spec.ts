import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentComponent4 } from './child-component.component';

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent4;
  let fixture: ComponentFixture<ChildComponentComponent4>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentComponent4 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentComponent4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
