import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentComponent4 } from './parent-component.component';

describe('ParentComponentComponent', () => {
  let component: ParentComponentComponent4;
  let fixture: ComponentFixture<ParentComponentComponent4>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponentComponent4 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponentComponent4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
