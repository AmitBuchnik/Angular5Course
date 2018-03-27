import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpapageComponent } from './spapage.component';

describe('SpapageComponent', () => {
  let component: SpapageComponent;
  let fixture: ComponentFixture<SpapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
