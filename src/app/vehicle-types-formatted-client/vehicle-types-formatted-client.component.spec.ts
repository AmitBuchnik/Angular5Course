import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypesFormattedClientComponent } from './vehicle-types-formatted-client.component';

describe('VehicleTypesFormattedClientComponent', () => {
  let component: VehicleTypesFormattedClientComponent;
  let fixture: ComponentFixture<VehicleTypesFormattedClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTypesFormattedClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypesFormattedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
