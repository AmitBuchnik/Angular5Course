import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {

  constructor() { }

  getVehicles() {
    return ['Truck', 'Car', 'Motorcycle'];
  }
}
