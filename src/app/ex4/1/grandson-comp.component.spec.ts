import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandsonCompComponent } from './grandson-comp.component';

describe('GrandsonCompComponent', () => {
  let component: GrandsonCompComponent;
  let fixture: ComponentFixture<GrandsonCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandsonCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandsonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
