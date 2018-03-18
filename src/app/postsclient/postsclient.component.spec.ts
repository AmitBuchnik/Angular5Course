import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsclientComponent } from './postsclient.component';

describe('PostsclientComponent', () => {
  let component: PostsclientComponent;
  let fixture: ComponentFixture<PostsclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
