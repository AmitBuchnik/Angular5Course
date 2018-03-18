import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleClientComponent } from './vehicle-client.component';

describe('VehicleClientComponent', () => {
  let component: VehicleClientComponent;
  let fixture: ComponentFixture<VehicleClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
